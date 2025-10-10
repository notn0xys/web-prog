import ZODB, ZODB.FileStorage
from meow_maker_v2 import *
from contextlib import asynccontextmanager
import persistent
import BTrees.OOBTree
from fastapi import FastAPI, Request, HTTPException, Header, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from random import randint
from fastapi.responses import HTMLResponse
import bcrypt
def hash_pwd(password:str):
    password = password.encode("utf-8")
    return bcrypt.hashpw(password , bcrypt.gensalt())

def check_pwd(password, hash_pwd):
    return bcrypt.checkpw(password.encode("utf-8"),hash_pwd)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@asynccontextmanager
async def lifespan(app: FastAPI):
    global db, root
    storage = ZODB.FileStorage.FileStorage('nyaaaaa.fs')
    db = ZODB.DB(storage)
    connection = db.open()
    root = connection.root()
    if not hasattr(root, 'courses'):
        root.courses = BTrees.OOBTree.BTree()
        course_1 = Course(101, "Studying in meow" , 4)
        course_2 = Course(102, "Studying in woof" , 3)
        course_3 = Course(103, "Studying in league" , 4)
        root.courses[101] = course_1
        root.courses[102] = course_2
        root.courses[103] = course_3
        transaction.commit()
    else:
        print("found")
    if not hasattr(root, 'students'):
        root.students = BTrees.OOBTree.BTree()

        student_1 = Student(1001, "MrBeast", hash_pwd("meow123"))
        student_2 = Student(1002, "MrLeast", hash_pwd("niiggggggga"))
        student_3 = Student(1003, "MrFeast", hash_pwd("wtfffff"))
        course_1 = root.courses[101]
        course_2 = root.courses[102]
        course_3 = root.courses[103]
        student_1.enrollCourse(course_1)
        student_1.enrollCourse(course_2)
        student_1.enrollCourse(course_3)
        
        student_1.getEnrollment(course_1).setScore(95)
        student_1.getEnrollment(course_2).setScore(85)
        student_1.getEnrollment(course_3).setScore(75)



        student_2.enrollCourse(course_1)
        student_2.enrollCourse(course_2)
        student_2.enrollCourse(course_3)

        student_2.getEnrollment(course_1).setScore(65)
        student_2.getEnrollment(course_2).setScore(75)
        student_2.getEnrollment(course_3).setScore(85)

        student_3.enrollCourse(course_1)
        student_3.enrollCourse(course_2)
        student_3.enrollCourse(course_3)    

        student_3.getEnrollment(course_1).setScore(75)
        student_3.getEnrollment(course_2).setScore(45)
        student_3.getEnrollment(course_3).setScore(85)
        
        root.students[1001] = student_1
        root.students[1002] = student_2
        root.students[1003] = student_3
        transaction.commit()
    if not hasattr(root, 'token_user'):
        root.token_user = BTrees.OOBTree.BTree()

    yield
    # connection.close()
    db.close()

def gen_token(id:str):
    token_user = root.token_user
    for token in token_user:
        if token_user[token] == id:
            return token
    token = "%020x" %(randint(0,0xffffffffffffffffffff))
    while token in token_user:
        token = "%020x" %(randint(0,0xffffffffffffffffffff))
    token_user[token] = id
    return token

def verify_token(token:str):
    token_user = root.token_user
    token = token.lower()
    if token in token_user:
        return token_user[token]

def get_current_user(authorization: str = Header(...)):
    if not authorization.startswith("token"):
        raise HTTPException(status_code= 401, detail= "Invalid Token format")
    token = authorization[len("token "):].strip()
    id = verify_token(token)
    if not id:
        raise HTTPException(status_code= 401, detail= "Token not created or token for said ID not found ")
    user = root.students
    if id not in user:
        raise HTTPException(status_code= 401 , detail= "user not found")
    return user[id] 
app = FastAPI(lifespan=lifespan)

@app.get("/student/all")
async def get_all():
    data = {}
    students = root.students
    for student in students:
        temp = students[student]
        data[student] = temp.getDetail()
    return data


@app.post("/student/new")
async def newUser(request: Request):
    data = await request.json()
    id = data.get("id")
    name = data.get("name")
    password = data.get("password")
    if (not id or not name or not password):
        raise HTTPException(status_code= 400, detail= "Missing Parameters")
    students = root.students
    for student in students:
        existing_id = students[student].get_id()
        if id == str(existing_id):
            HTTPException(status_code=401, detail="ID already exist")
    new_student = Student(int(id),name, hash_pwd(password))
    root.students[int(id)] = new_student
    transaction.commit()
    return new_student
    

@app.get("/path/{path_param}")
async def path(path_param: str):
    return {"path_parameter": path_param}

@app.post("/student/login")
async def login(request: Request):
    students = root.students

    data = await request.json()
    id = data.get("id")
    password = data.get("password") 
    if int(id) not in students:
        raise HTTPException(status_code= 400, detail= "Wrong ID")
    user_record = students[int(id)].getDetail()
    if not check_pwd(password, user_record["password"]):
        raise HTTPException(status_code= 400, detail= "Wrong Password")

    token = gen_token(user_record["id"])
    return {"acess_token": token, "token_type" : "token"}

@app.post("/student/enroll")
async def enroll(request: Request, current_user = Depends(get_current_user)):
    data = await request.json()
    id = data.get("id")
    for course in root.courses:
        if id == root.courses[course].getID():
            targeted_course = root.courses[course]
            break
    if id in current_user.get_enroll_id():
        raise HTTPException(status_code=400, detail="Already register")
    current_user.enrollCourse(targeted_course)
    transaction.commit()
    return {
        "id" : id,
    }

@app.get("/student/enrollinfo/")
async def getTokenOwnerInfo(current_user = Depends(get_current_user)):
    ans = []
    for e in current_user.enrolls:
        ans.append(e.getDetail())

    return ans

@app.post("/student/logout")
async def logout(current_user = Depends(get_current_user)):
    id = current_user.id
    token_user = root.token_user
    for token in token_user:
        if token_user[token] == id:
            del token_user[token]
            break
    return {"message": "See you " + current_user["name"] + "! You are logged Out"}

@app.get("/student/token")
async def returntoken():
    token = root.token_user
    return token

@app.get("/course")
async def return_course():
    data = []
    courses = root.courses
    return courses

@app.get("/course/html", response_class=HTMLResponse)
async def return_course_html():
    content = """
        <html>
            <body>
                <table>
                    <thead>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Credit </th>
                    </thead>
                    <tbody>
    """
    courses = root.courses
    for course in courses.values():
        content += f"""
            <tr>
                <td> {course.getID()}</td>
                <td> {course.getName()}</td>
                <td> {course.getCredit()}</td>
            </tr>
        """
    content += """
        </tbody>
        </table>
        </body>
        </html>
    """
    return content
        
@app.post("/course/new")
async def make_new(request: Request):
    courses = root.courses
    data = await request.json()
    id = data.get("id")
    name = data.get("name")
    credit = data.get("credit")
    for course in courses.values():
        if id == course.getID():
            raise HTTPException(401, detail="Course a;ready exist")
    root.courses[id] = Course(id, name, credit)
    transaction.commit()
    return root.courses[id]

@app.get("/student/transcript")
async def get_transcript(current_user = Depends(get_current_user)):
    return current_user.get_transcript()

@app.get("/student/transcript/html", response_class=HTMLResponse)
async def get_transcript(current_user = Depends(get_current_user)):
    transcript = current_user.get_transcript()
    content = f"""
        <html>
            <body>
                <h1> Unoffical Transcipt </h1>
                <h3> Student ID {transcript["id"]} </h3>
                <p> Name: {transcript["name"] } </p>
                <table>
                    <thead>
                        <th> ID </th>
                        <th> Title </th>
                        <th> Credit </th>
                        <th> Score </th>
                        <th> Grade </th>
                    </thead>
                    <tbody>
    """
    for item in transcript["enroll"]:
        content += f"""
            <tr>
                <td> {item["id"]}</td>
                <td> {item["name"]}</td>
                <td> {item["credit"]}</td>
                <td> {item["score"]}</td>
                <td> {item["grade"]}</td>
            </tr>
        """
    content += f"""
        </tbody>
        </table>
        <h3> GPA: {transcript["gpa"]} </h3>
        </body>
        </html>
    """
    return content
