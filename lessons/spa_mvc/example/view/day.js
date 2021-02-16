
export function renderDay(day) {
  return `
    <li class="day">
      <div class="day_name">${day.name}</div>
      <div class="day_todos">
        <div>
          ${day.todos.map(({description}) => description).join(',')}
        </div>

        <div class="add_todo_bottom">
          <input class="add_todo_input" data-id="${day.id}"/>
          <button class="add_todo_btn" data-id="${day.id}">Add todo</button>
        </div>
      </div>
    </li>
  `
}