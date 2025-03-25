// create a Person class and create multiple object from it with name and age

class Person{
    constructor(name,age){
       this.name = name,
       this.age = age
   }
   sayHello(){
       return `${this.name} says Hii Hello`
   }
}

let Anand = new Person('Anand',21)
console.log(Anand)
console.log(Anand.sayHello())

console.log(`----------------`)

const Aditya = new Person('Aditya',24)
console.log(Aditya)
console.log(Aditya.sayHello())

console.log(`----------------`)

const Shrikant = new Person('Shrikant',45)
console.log(Shrikant)
console.log(Shrikant.sayHello())