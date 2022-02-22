import { EQUAL_OPERATION, PLUS_OPERATION, MINUS_OPERATION } from '../constants.js'

export class AppModel {
  constructor() {
    this.value = null
    this.operation = null
    this.argument = null
  }

  #valueToString() {
    return this.value === null ? '' : this.value.toString()
  }

  getRenderData() {
    return {
      value: this.#valueToString()
    }
  }

  concatNumber(number) {
    this.value = Number(this.#valueToString() + number)
  }

  makeOperation(operationType) {
    switch (operationType) {
      case EQUAL_OPERATION:
        this.makeCalculation()
        return
      default: {
        this.operation = operationType
        this.argument = this.value
        this.value = null
      }
    }
  }

  makeCalculation() {
    switch (this.operation) {
      case PLUS_OPERATION: {
        this.value = this.argument + this.value
        break
      }
      case MINUS_OPERATION: {
        this.value = this.argument - this.value
        break
      }
      default:
        break;
    }

    this.argument = null
    this.operation = null
  }
}