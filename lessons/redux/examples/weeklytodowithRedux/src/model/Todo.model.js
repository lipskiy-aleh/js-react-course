import { NEW_TODO_STATUS } from "../../../weeklytodo/src/constants"

class Todo {
  constructor(descirption) {
    this.id = uid()
    this.descirption = descirption
    this.status = NEW_TODO_STATUS
  }
}