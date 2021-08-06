class Student {
    constructor(rollNo, gender, firstName, lastName) {
        this.id = rollNo;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.courses = new Set();
    }
    
    assignCourse = (courses) => {
        this.courses.add(courses);
        return this;
    }

    getAssignedCourse = () => {
        console.log("list of courses opted by : " + this.firstName + " " + this.lastName);
        for (var course of (this.courses)) {
            console.log(course.id + " @ course name => " + course.courseName);
        }
    }
}

class Course {
    constructor(courseId, courseName, description) {
        this.id = courseId;
        this.courseName = courseName;
        this.description = description;
    }
}

class StudentCourseDao {
    constructor() {
        this.studentMap = new Map();
        this.courseMap = new Map();
    }

    findStudentById = (rollNo) => {
        return this.studentMap.get(rollNo);
    }   
    
    // F1 - add student
    addStudent = (rollNo, gender, firstName, lastName) => {
        let student = new Student(rollNo, gender, firstName, lastName);
        this.studentMap.set(rollNo, student);
        return student;
    }

    // F2 - add courses
    addCourse = (courseId, courseName, description) => {
        let course = new Course(courseId, courseName, description);
        this.courseMap.set(courseId, course);
        return course;
    }

    // F3 - assign course to a student
    assignCourse = (student, course) => {
        let studentObj = this.findStudentById(student.id);
        studentObj.assignCourse(course);
    }

    // F4 - list of courses opted by a student
    getCourseByStudent = (student) => {
        let studentObj = this.findStudentById(student.id);
        studentObj.getAssignedCourse();
    }

    // F5 - for given course give list of students who have opted the course
    studentListByCourse = (course) => {
        let students = [];
        // iterate over student list
        let studentsList = this.studentMap.keys();
        for (let itr of studentsList) {
            var s = this.studentMap.get(itr);
            if (s.courses.has(course)) {
                students.push(s.id);
            }
        }
        console.log("list of students who opted course " + course.courseName + " are : " + students);
        return students;
    }

    // F6 - courses opted by exactly zero students
    coursesNotOpted = () => {
        let nonoptedCourse = [];
        let optedCoursesList = [];

        // iterate over student list
        let studentsList = this.studentMap.keys();
        for (let itr of studentsList) {
            var s = this.studentMap.get(itr);
            optedCoursesList.push(...s.courses);
        }
        var optedCourses = new Set(optedCoursesList);
        
        // iterate over couse list
        let courseList = this.courseMap.keys();
        for (let itr of courseList) {
            var c = this.courseMap.get(itr);
            if (!optedCourses.has(c)) {
                nonoptedCourse.push(c.courseName);
            } 
        }
        console.log("courses which are not opted by anyone: " + nonoptedCourse);
    }

}

const studentCourseDao = new StudentCourseDao();

console.log("------testing add students-----");
var student1 = studentCourseDao.addStudent("2012001", "M", "Kartikeya", "Mishra");
var student2 = studentCourseDao.addStudent("2012002", "F", "Prajakta", "Narayankar");
var student3 = studentCourseDao.addStudent("2012003", "M", "Shrinivas", "Pai");
var student4 = studentCourseDao.addStudent("2012004", "F", "Shreya", "Tripathi");
var student5 = studentCourseDao.addStudent("2012005", "M", "Rajeev", "Jaiswal");

console.log("\n------testing add courses------\n");
var course1 = studentCourseDao.addCourse("NS101", "Advance Mathematics", "Epsilon Delta");
var course2 = studentCourseDao.addCourse("ES101", "Electrical Concepts", "Electronics branch course");
var course3 = studentCourseDao.addCourse("HS101", "Communication", "mandatory MHRD course");
var course4 = studentCourseDao.addCourse("NS102", "Physics", "mandatory MHRD course");

console.log("\n----assigning courses to student 1------\n");
studentCourseDao.assignCourse(student1, course1);
studentCourseDao.assignCourse(student1, course2);
studentCourseDao.assignCourse(student1, course1);
studentCourseDao.assignCourse(student1, course2);
console.log("\n---testing course opted by student 1----\n");
studentCourseDao.getCourseByStudent(student1);

console.log("\n----assigning courses to student 2------\n");
studentCourseDao.assignCourse(student2, course1);
studentCourseDao.assignCourse(student2, course2);
console.log("\n---testing course opted by student 2----\n");
studentCourseDao.getCourseByStudent(student2);

console.log("\n----assigning courses to student 3------\n");
studentCourseDao.assignCourse(student3, course1);
console.log("\n---testing course opted by student 3----\n");
studentCourseDao.getCourseByStudent(student3);

console.log("\n----assigning courses to student 4------\n");
studentCourseDao.assignCourse(student4, course2);
console.log("\n---testing course opted by student 4----\n");
studentCourseDao.getCourseByStudent(student4);

console.log("\n----assigning courses to student 5------\n");
studentCourseDao.assignCourse(student5, course2);
console.log("\n---testing course opted by student 5----\n");
studentCourseDao.getCourseByStudent(student5);

console.log("\n----testing list of students by course------\n");
studentCourseDao.studentListByCourse(course1);
studentCourseDao.studentListByCourse(course2);

console.log("\n------testing course not opted by none---------\n");
studentCourseDao.coursesNotOpted();