class Person {
    Name;
    Age;
    Gender;
    Nationality;
    constructor(Name,Age,Gender,Nationality){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Nationality = Nationality;
    }
    introduce(){
        return `My name is ${this.Name}. I am ${this.Age} year old.\nMy Gender is ${this.Gender} and I am from ${this.Nationality}.\n`
    }
}

let person1 = new Person("Rheeturaj", 12,"Male","India")
let person2 = new Person("Ram", 120,"Male","Nigeria")
let person3 = new Person("Rm", 10,"Female","Japan")
console.log(person1.introduce())
console.log(person2.introduce())
console.log(person3.introduce())

class Student extends Person {
    Subject;
    constructor(Name,Age,Gender,Nationality,Subject) {
        super(Name,Age,Gender,Nationality)
        this.Subject = Subject;
    }
    study(){
        return `${this.Name} currently studying ${this.Subject}.`
    }
}

let student1 = new Student("Xyz", 12,"Male","India","Data Science")
console.log(student1.introduce())
console.log(student1.study())