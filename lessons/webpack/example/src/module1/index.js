
import format from 'utils/format'
import helloImg from '../../public/img/hello.png'
format()
export function render(name) {
  return `
    <div>
      <h2>Hello ${name}</h2>
      <div>
        <img alt="hello" src=${helloImg}>
      </div>
    </div>
  `
}