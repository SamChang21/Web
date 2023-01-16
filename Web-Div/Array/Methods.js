class Student {
    constructor(name, age, grade, gender, courses, iq){
        this.name = name
        this.age = age
        this.grade = grade
        this.gender = gender
        this.courses = courses
        this.iq = iq
    }
}
const student1 = new Student ('Sam',16, 10, 'male', ['english1', 'math', 'science'])
const student2 = new Student ('Max',17, 10, 'male', ['english1'])
const student3 = new Student ('Simone',18, 12, 'female',['Pe'])
const student4 = new Student ('Nico',15, 10, 'male', ['english2honor'])
const student5 = new Student ('Adam',17, 9, 'male', ['english1'])
const students = [student1, student2, student3,student4, student5]
 
const senior = students.filter (student =>{
    return student.grade===12
})
const nonsenior = students.filter (student =>{
    return student.grade!==12
})
const old = students.filter (student =>{
    return student.age >= 17
})
const specific = students.filter (student =>{
    student.courses.foreach(course => {
        return courses==='english1'
    })
})
const boy = students.filter (student =>{
    return student.gender==='male'
})
const girl = students.filter (student =>{
    return student.gender==='female'
})