from fastapi import FastAPI, Request, HTTPException, Header, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from random import randint
import bcrypt
def hash_pwd(password:str):
    password = password.encode("utf-8")
    return bcrypt.hashpw(password , bcrypt.gensalt())

def check_pwd(password, hash_pwd):
    return bcrypt.checkpw(password.encode("utf-8"),hash_pwd)
app = FastAPI()
users = {
    "1" :  {
        "id" : "1",
        "name": "Meow",
        "hashed_pw": hash_pwd("Sigmaboy"),
        "enroll": [{
            "id": "101",
            "name":"python",
            "grade" : "A"

        }]
    },
    "2" :  {
        "id" : "2",
        "name": "Sir Meow 2",
        "hashed_pw": hash_pwd("rarrrrr"),
        "enroll": []
    }
}
@app.get("/student/all")
def retrieve():
    count = 1
    return_users = {

    }
    for i in users:
        new_dict = {k: v for k, v in users[i].items() if k != "hashed_pw"}
        return_users[str(count)] = new_dict
        count += 1

    return return_users

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

token_user = {}

def gen_token(id:str):
    for token in token_user:
        if token_user[token] == id:
            return token
    token = "%020x" %(randint(0,0xffffffffffffffffffff))
    while token in token_user:
        token = "%020x" %(randint(0,0xffffffffffffffffffff))
    token_user[token] = id
    return token

def verify_token(token:str):
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
    user = users.get(id)
    if not user:
        raise HTTPException(status_code= 401 , detail= "user not found")
    return user 


@app.post("/student/new")
async def newUser(request: Request):
    data = await request.json()
    id = data.get("id")
    name = data.get("name")
    password = data.get("password")
    if (not id or not name or not password):
        raise HTTPException(status_code= 400, detail= "Missing Parameters")
    for user in users:
        if id == users[user]["id"]:
            return {"detail" : "Id already exist"}
    users[str(len(users.keys()) + 1)] = {
        "id": id,
        "name": name,
        "hashed_pw": hash_pwd(password),
        "enroll": []
    }
    return {"id": id, "name": name, "password": password}

@app.get("/path/{path_param}")
async def path(path_param: str):
    return {"path_parameter": path_param}

@app.post("/student/login")
async def login(request: Request):
    data = await request.json()
    id = data.get("id")
    password = data.get("password") 
    user_record = users.get(id)
    if not user_record:
        print(users)
        print(id)
        raise HTTPException(status_code= 400, detail= "Wrong ID")
    if not check_pwd(password, user_record["hashed_pw"]):
        raise HTTPException(status_code= 400, detail= "Wrong Password")

    token = gen_token(user_record["id"])
    return {"acess_token": token, "token_type" : "token"}

@app.post("/student/enroll")
async def enroll(request: Request, current_user = Depends(get_current_user)):
    data = await request.json()
    id = data.get("id")
    name = data.get("name")
    grade = data.get("grade")
    if not id or not name or not grade:
        raise HTTPException(status_code=400, detail="Enrollment Details missing")
    for subject in current_user["enroll"]:
        if subject["id"] == id:
            raise HTTPException(status_code=403, detail="Subject Already Exist")
    current_user["enroll"].append({
        "id" : id,
        "name" : name,
        "grade": grade
    })
    return {
        "id" : id,
        "name" : name,
        "grade": grade
    }

@app.get("/student/enrollinfo/")
async def getTokenOwnerInfo(current_user = Depends(get_current_user)):
    return current_user["enroll"]

@app.post("/student/logout")
async def logout(current_user = Depends(get_current_user)):
    id = current_user["id"]
    token = gen_token(id)
    del token_user[token]
    print(token_user)
    return {"message": "See you " + current_user["name"] + "! You are logged Out"}
