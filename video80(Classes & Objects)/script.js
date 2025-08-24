// 1. Making objects to work in real world senarious:-

// let obj = {
//     Name: "Nikhil",
//     Age: 20
// }
// console.log(obj);

// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps:true
// }

// rabbit.__proto__ = animal  // sets rabbit.[[prototype]] = animal
// console.log(rabbit); 



// 2. Creating class :-

class Animal {
    constructor(name) {
        this.name = name
        console.log("Class is created...");

    }

    //  using static method the the function belogs to class as a whole and to any particular object 
    static eats() {
        console.log("Kha raha hunn");

    }
    jumps() {
        console.log("kood raha hunn");

    }
}

let a = new Animal("bunny", "12cm")
console.log(a);
Animal.eats() // eats is static function

//  inheriting properties from the class

class lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is lion");

    }
    //  method overriding
    eats() {
        // super.eats()
        console.log("sher Kha raha hai");

    }

}

let leo = new lion("shera")
console.log(leo);

//  instance: <obj>instanceof<class> it returns true or false it means that object is created from the given class name

leo instanceof lion;
leo instanceof Animal;
