
function Animal(type, name) {
  this.type = type
  this.name = name
}

Animal.prototype.eat = function() {
  console.log(`${this.type} ${this.name} am eating`)
}

const cat_2 = new Animal('Matroskin')
cat_2 
//1-  Object
//2 - proto -> Animal.prototype


function Cat(name) {
  // const this = {}
  Animal.call(this, 'cat', name)

  // return this
}

Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.__proto__ === Animal.prototype
Cat.prototype.constructor = Cat

Cat.prototype.say = function() {
  console.log(`${this.name} hello`)
}

Cat.prototype.eat = function() {
  const phrase = Animal.prototype.eat.call(this)
  return `Cat said: ${phrase}`
}


const cat_1 = new Cat('Murzik')
cat_1.eat()


debugger

// ES6
// class Child extends Parent{
//   constructor(args) {
//     super(args)
//   }
// }

// ///
// class Child{
// }

// class Child{
//   constructor() {
//   }
// }

// function Child(){
// }
// Child.prototype 

// const child = new Child()
// ///

// Object.create 
// function objCreate(parent) {
//   function F() {}
//   F.prototype = parent
//   return new F()
// }