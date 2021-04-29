
export class Todo{
  constructor() {
    this.text = '',

    this.uid = new Date().getTime()
  }

  changeText(newText) {
    this.text = newText
  }
}