
class Machine{
  #active = false
  example = 123

  constructor(config) {
    this.config = config

    // this.enable = this.enable.bind(this)
  }

  get isActive() {
    console.log('ACTIVE RETURNED')
    return this.#active
  }

  set active(value) {
    if(typeof value !== 'boolean') {
      return
    }

    this.#active = value
  }

  // isActive() {
  //   return this.#active
  // }

  enable = () => {
    this.#active = true
  }

  disable() {
    this.#active = false
  }
}

class CoffeeMachine extends Machine {
  constructor(config) {
    super(config)
  }

  enable() {
    super.enable()
    console.log('Custom enable')
  }

  makeCoffee(type) {
    if(!this.isActive) {
      throw new Error('Before make coffee turn on')
    }
    console.log('In progress')
  }
}

const coffee = new CoffeeMachine({ type: 'coffeeMachine' })


// const machine = new Machine()
// const func = machine.enable
// func()