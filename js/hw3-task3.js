class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return `${this.name} age is ${this.age}.`
    }
}
const man = new Person('Garry', 42);
console.log(man.getInfo());