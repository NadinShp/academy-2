class Animal {
    constructor(name, age, status, legs, species) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status){
        super(name, age, status);
        this.legs = 0;
        this.species='shark';
    }
}

class Cat extends Animal {
    constructor(name, age, status){
        super(name, age, status);
        this.legs = 4;
        this.species = 'cat';
    }
    catGreeting(){
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal{
    constructor(name, age, status, master){
        super(name, age, status)
        this.master = master;
        this.legs = 4;
        this.species = 'dog';
    }
    greetMaster(){
        return `Hello ${this.master}.`
    }
}

const myShark = new Shark('Crazy', 5, 'single');
console.log(myShark);

const myCat = new Cat('Kitty', 2, 'married');
console.log(myCat.catGreeting());

const myDog = new Dog('Lacky', 8, 'single', 'Ganry');
console.log(myDog.greetMaster());