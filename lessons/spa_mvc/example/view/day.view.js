
export function renderDay({ name, day, todos }) {
  console.log(todos)
  return `
    <li class="day">
      <div>
        <h3>${name}</h3>
        <h4>${day}</h4>
        <div class="todos">
          ${todos.map((todo) => `
            <div>${todo.text}</div>
          `).join('')}
        </div>
      </div>
      <div>
        <input type="text" id=${day}>
        <button class="add_todo_btn" data-day=${day}>Add todo</button>
      </div>
    </li>
  `
}