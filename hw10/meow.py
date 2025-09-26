import ZODB, ZODB.FileStorage
from meow_maker import *

storage  = ZODB.FileStorage.FileStorage('nyaaaaa.fs')
db = ZODB.DB(storage)
connection = db.open()
root = connection.root

if __name__ == "__main__":
    courses = root.courses
    for c in courses:
        course = courses[c]
        course.printDetails()
    print()

    students = root.students
    for s in students:
        student = students[s]
        student.printTranscript()
        print()
