
// ?[key]=value&
function generateQueryStr(queryParams = {}) {
  const str = Object.keys(queryParams).map((key) => `${key}=${queryParams[key]}`).join('&')
  return str ? `?${str}` : ''
}

async function getTodos(queryParams = {}) {
  try {
    const search = generateQueryStr(queryParams)
    const res = await fetch(`http://demo6226555.mockable.io/todos${search}`)

    if (!res.ok) {
      return []
    }

    const data = await res.json()
    return data

  } catch (error) {
    console.error(error)
    return []
  }
}

// getTodos().then((data) => {
//   debugger
// })

async function addTodo(data) {
  try {
    const res = await fetch('http://demo6226555.mockable.io/todos', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error(error)
  }
}
addTodo({
  status: 'new',
  text: 'Test create todo',
})

function render(data) {
  const root = document.getElementById('root')

  root.innerHTML = `
    <div>
      <ul>
        ${data.map(({ text }) => `
          <li>${text}</li>
        `).join('')}
      </ul>
      <button>Add todo</button>
    </div>
  `
}

async function init() {
  const data = await getTodos({ status: 'new' })

  render(data)
}

// init()

// function corsExample() {
//   try {
//     fetch('https://www.google.com/', {
//       mode: 'cors'
//     })
//   } catch (error) {
//     debugger
//   }
// }
// corsExample()