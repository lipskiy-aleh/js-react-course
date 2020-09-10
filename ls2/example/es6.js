
class Animal {
  constructor(type, name) {
    this.type = type
    this.name = name
    // this.eat_constructor = function(){}
  }

  // #method -> private
  // #eat_private() {

  // }

  eat() {
    return `${this.name} am eating`
  }
}

const cat_1 = new Animal('cat', 'Matroscin')
cat_1.eat()

class Cat extends Animal {
  constructor(name) {
    super('cat', name)
  }

  static test() {}

  say() {
    console.log(`${this.name} hello`)
  }

  // eat() {
  //   console.log('test')
  // }

  eat() {
    const phrase = super.eat()
    return `Cat said: ${phrase}`
  }
}

const cat_2 = new Cat('Pupkin')


// Static method Cat.test() -> Work

// Cat.eat() -> Error


// regular method = cat_2.eat() 
// private method cat_2.private() -> Error  Cat.private() -> error
// static method Cat.static()
