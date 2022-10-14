// const house1 = {
//     size: 3000,
//     bedRooms: 5,
//     bathRooms: 4,
//     lightsOn: true,
//     toggleLights: () => {
//         house1.lightsOn = !house1.lightsOn;
//     }
// }

// const house2 = {
//     size: 3000,
//     bedRooms: 5,
//     bathRooms: 4
// }

// class House {
//     constructor(size, bedRooms, bathRooms) {
//         this.size = size;
//         this.bedRooms = bedRooms;
//         this.bathRooms = bathRooms;
//         this.lightsOn = false;
//     }

//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
// }

// let house3 = new House(2000, 2, 2);
// console.log(house3);
// house3.toggleLights();
// console.log(house3);

// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.speed = 0;
//     }

//     accelerate() {
//         this.speed = this.speed + 1;
//     }

//     decelerate() {
//         this.speed--;
//     }
// }

// const myCar = new Car('Dodge', 'Ram', 2020);
// console.log(myCar);

// // make a person class
// // have a name and age property that are taken in when you new up a person
// // have a sayhello method that console logs hi my name is {name}
// // have a haveBirthday method which adds one to the age

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hi, my name is ${this.name}`;
    }

    haveBirthday() {
        this.age++;
    }
}

const jacob = new Person('Jacob', 31);
console.log(jacob);
console.log(jacob.sayHello());
jacob.haveBirthday();
console.log(jacob)