class Parent{
    constructor(){
        this.fatherName = "SubastNagar";
    }
}

class Child extends Parent{ //Child class is inherited by Parent class
    constructor(name){
        super();
        this.name = name;
    }
}

const baby1 = new Child("mahi");
const baby2 = new Child("Tahi");
console.log(baby1, baby2);