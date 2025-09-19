export{ };

type TStudent = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: number | string;
}

type TCourse = {
    courseId: number;
    title: string;
    price: number;
    students: TStudent[];

}

const student1: TStudent = {
    id: 1,
    name: "Duy",
    email: "Duy@gmail.com",
    isPremium: true,
    contact: 123456
}

const student2: TStudent = {
    id: 2,
    name: "Duy2",
    email: "Duy2@gmail.com",
    isPremium: false,
    contact: 123456
}

const course1: TCourse = {
    courseId: 1,
    title: "typeScript",
    price: 99,
    students: []
}

const course2: TCourse = {
    courseId: 2,
    title: "typeScript2",
    price: 99,
    students: []
}

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
    course.students.push(student)
}

const printCourseInfo = (course: TCourse) => {
    console.log(`
Course name: ${course.title}
Number of student: ${course.students.length}`);
    if (course.students.length>0) {
        //["duy", "duy2",..]
        const studentList = course.students.map(item => item.name);
        console.log("Student List: ", studentList.join(","))
    } else {
        console.log("There is no student")
    }
}

const main = () => {
    registerStudentToCourse(student1, course1);
    registerStudentToCourse(student2, course1);
    printCourseInfo(course1);
    printCourseInfo(course2);
}

main();