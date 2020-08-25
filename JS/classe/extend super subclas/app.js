class Pet{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        const {name} = this;
        return `${name} is eating`;
    }
}

class Cat extends Pet {
    meow(){
        return "meow!"
    }
}
class Dog extends Pet {
    bark(){
        return "bark!"
    }
}