class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.clg = "NDUB";
    }
}

const student1 = new Student(123, "Mahi");
const student2 = new Student(002, "Asha");
const student3 = new Student(127, "Tanvir");
const student4 = new Student(458, "Sohan");

//console.log(student1, student2, student3, student4);

//console.log(student4.name);
console.log(student2.name);