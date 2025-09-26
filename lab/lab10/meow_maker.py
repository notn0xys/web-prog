import persistent
import ZODB, ZODB.FileStorage
import transaction
import BTrees.OOBTree
class Course(persistent.Persistent):
    def __init__(self, id , name = "", credit = 0):
        self.id = id
        self.name = name
        self.credit = credit
    def printDetails(self):
        print(self.__str__())
    def setName(self,name):
        self.name = name
    def getCredit(self):
        return self.credit
    def __str__(self):
        return "ID: %8s Course Name: %s, Credit %d" %(str(self.id), self.name, self.credit)


class Student(persistent.Persistent):
    def __init__(self, enrollment = [] , id  = 0, name = ''):
        self.enrolls = enrollment
        self.id = id
        self.name = name
    def enrollCourse(self,course):
        moew = Enrollment(course, grade = "A", student= self)
        self.enrolls.append(moew)
    def getEnrollment(self, course):
        for enrolls in self.enrolls:
            if (enrolls.getCourse() == course):
                return enrolls
            
        return None
    def printTranscript(self):
        print("Transcript: ")
        print()
        print("ID " + str(self.id) + " Name: " + self.name)
        counter = 0
        curr_gpa = 0
        for erollment in self.enrolls:
            acc = 0
            erollment.printDetails()
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

        print("Total Gpa is %3f" %(curr_gpa/counter))
    def setName(self, name):
        self.name = name
        
    
        
class Enrollment(persistent.Persistent):
    def __init__(self, course,student, grade = "A"):
        self.course = course
        self.grade = grade
        self.student = student
    def getCourse(self):
        return self.course
    def getGrade(self):
        return self.grade
    def printDetails(self):
        print(self.course.__str__() + " Grade " + self.getGrade())
    def setGrade(self, grade = ""):
        self.grade = grade



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
    
    student_1.getEnrollment(course_1).setGrade("B")
    student_1.getEnrollment(course_2).setGrade("A")
    student_1.getEnrollment(course_3).setGrade("B+")



    student_2.enrollCourse(course_1)
    student_2.enrollCourse(course_2)
    student_2.enrollCourse(course_3)
    
    student_3.enrollCourse(course_1)
    student_3.enrollCourse(course_2)
    student_3.enrollCourse(course_3)    

    root.courses = BTrees.OOBTree.BTree()
    root.courses[101] = course_1
    root.courses[102] = course_2
    root.courses[103] = course_3

    root.students = BTrees.OOBTree.BTree()
    root.students[1001] = student_1
    root.students[1002] = student_2
    root.students[1003] = student_3

    transaction.commit()




