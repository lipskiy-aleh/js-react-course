
function Machine() {
  this._enableProperty = false
}

Machine.prototype.status = function() {
  console.log(this._enableProperty)
}

Machine.prototype.enable = function() {
  this._enableProperty = true
}

Machine.prototype.disable = function() {
  this._enableProperty = false
}


class CoffeMachine extends Machine{
  constructor() {
    super()

    this.waterAmount = 0
  }

  makeCoffe(type) {
    console.log(type)
  }

  setWaterAmount(amount) {
    this.waterAmount = amount
  }

  enable() {
    if(this.waterAmount === 0) {
      return
    }
    
    super.enable()
  }
}

const coffeMachine = new CoffeMachine()