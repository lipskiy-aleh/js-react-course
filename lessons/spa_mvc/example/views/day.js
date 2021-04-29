
export function render(data) {
  return `
    <div class="day">
      <div>${data.number}</div>
      <div>${data.todos.length}</div>
      <button class="addTodoBtn" data-day_index=${data.number}>Add todo</button>
    </div>
  `
}