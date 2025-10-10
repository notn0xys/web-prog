import persistent
import ZODB, ZODB.FileStorage
import persistent.list
import transaction
import BTrees.OOBTree
class Course(persistent.Persistent):
    def __init__(self, id , name = "", credit = 0):
        self.id = id
        self.name = name
        self.credit = credit
        self.gradeScheme = [
            {"Grade": "A", "min": 80, "max": 100},
            {"Grade": "B", "min": 70, "max": 79},
            {"Grade": "C", "min": 60, "max": 69},
            {"Grade": "D", "min": 50, "max": 59},
            {"Grade": "F", "min": 0, "max": 49}
        ]
    def printDetails(self):
        print(self.__str__())
    def setName(self,name):
        self.name = name
    def getCredit(self):
        return self.credit
    def __str__(self):
        return "ID: %8s Course Name: %s, Credit %d" %(str(self.id), self.name, self.credit)
    def scoreGrading(self, score):
        for scheme in self.gradeScheme:
            if (score >= scheme["min"] and score <= scheme["max"]):
                return scheme["Grade"]
        return "F"
    def setGradeScheme(self, scheme):
        if not (isinstance(scheme, list)):
            print("Grade scheme must be a list of dictionaries")
            return
        for item in scheme:
            if not (isinstance(item, dict)):
               print("Each item in the scheme must be a dictionary")
               return
        keys = {"Grade", "min", "max"}
        if set(item.keys()) != keys:
            print("Missing keys or extra keys ")
            return
        self.gradeScheme = scheme
    def getID(self):
        return self.id
    def getName(self):
        return self.name
    def getCredit(self):
        return self.credit


class Student(persistent.Persistent):
    def __init__(self,   id  = 0, name = '', password = ""):
        self.enrolls = persistent.list.PersistentList()
        self.id = id
        self.name = name
        self.password = password
    def enrollCourse(self,course):
        moew = Enrollment(course, student= self)
        self.enrolls.append(moew)
    def getEnrollment(self, course):
        for enrolls in self.enrolls:
            if (enrolls.getCourse() == course):
                return enrolls
    def get_enroll_id(self):
        ids = []
        for enroll in self.enrolls:
            ids.append(enroll.getDetail().getID())
        print(ids)
        return ids
    def get_id(self):
        return self.id
    def printTranscript(self):
        print("Transcript: ")
        print()
        print("ID " + str(self.id) + " Name: " + self.name)
        counter = 0
        curr_gpa = 0
        for erollment in self.enrolls:
            acc = 0
            erollment.printDetails()
            counter += erollment.course.getCredit()
            match grade.upper():
                case "A":
                    acc += 4
                case "B+":
                    acc += 3.5
                case "B":
                    acc += 3
                case "C+":
                    acc += 2.5
                case "C":
                    acc += 2
                case "D+":
                    acc += 1.5
                case "D":
                    acc += 1
                case "F":
                    acc += 0
                case _:
                    acc += 0
            curr_gpa += acc * erollment.course.getCredit()

        print("Total Gpa is %3f" %(curr_gpa/counter))
    def get_transcript(self):
        meow = dict()
        meow["id"] = self.id
        meow["name"] = self.name
        meow["enroll"] = []
        counter = 0
        curr_gpa = 0
        for erollment in self.enrolls:
            acc = 0
            meow2 = dict()
            course = erollment.getCourse()
            meow2["id"] = course.getID()
            meow2["name"] = course.getName()
            meow2["credit"] = course.getCredit()
            meow2["score"] = erollment.score
            meow2["grade"] = erollment.getGrade()
            meow["enroll"].append(meow2)
            grade = erollment.getGrade()
            counter += erollment.course.getCredit()
            match grade.upper():
                case "A":
                    acc += 4
                case "B+":
                    acc += 3.5
                case "B":
                    acc += 3
                case "C+":
                    acc += 2.5
                case "C":
                    acc += 2
                case "D+":
                    acc += 1.5
                case "D":
                    acc += 1
                case "F":
                    acc += 0
                case _:
                    acc += 0
            curr_gpa += acc * erollment.course.getCredit()
        meow['gpa'] = curr_gpa/counter
        return meow
    def setName(self, name):
        self.name = name
    def getDetail(self):
        enroll = []
        for e in self.enrolls:
            enroll.append(e.getDetail())
        return {
            "id": self.id,
            "name": self.name,
            "password": self.password,
            "enroll": enroll
        }
        
class Token(persistent.Persistent):
    def __init__(self, token: str, student: Student):
        self.token = token
        self.student = student
        self.grade = ""
    def getToken(self):
        return self.token
    def getStudent(self):
        return self.student
        
class Enrollment(persistent.Persistent):
    def __init__(self, course, student, score = 0):
        self.course = course
        self.student = student
        self.score = score
        self.garde = ""
    def getCourse(self):
        return self.course
    def getGrade(self):
        return self.course.scoreGrading(self.score)
    def printDetails(self):
        print(self.course.__str__() + " Grade " + self.getGrade() + " Score " + str(self.score))
    def setScore(self, score):
        self.score = score
    def getScore(self):
        return self.score
    def getDetail(self):
        return self.course
    
    


if __name__ == "__main__":
    storage  = ZODB.FileStorage.FileStorage('nyaaaaa.fs')
    db = ZODB.DB(storage)
    connection = db.open()
    root = connection.root
    course_1 = Course(101, "Studying in meow" , 4)
    course_2 = Course(102, "Studying in woof" , 3)
    course_3 = Course(103, "Studying in league" , 4)

    student_1 = Student([], 1001, "MrBeast")
    student_2 = Student([] , 1002, "MrLeast")
    student_3 = Student([], 1003, "MrFeast")

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

    root.courses = BTrees.OOBTree.BTree()
    root.courses[101] = course_1
    root.courses[102] = course_2
    root.courses[103] = course_3

    root.students = BTrees.OOBTree.BTree()
    root.students[1001] = student_1
    root.students[1002] = student_2
    root.students[1003] = student_3

    transaction.commit()




