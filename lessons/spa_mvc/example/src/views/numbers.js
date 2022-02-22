
const arr = new Array(3).fill(1)

export const renderNumbers = () => {
  let number = 0

  return `
    <ul class="numbers">
      ${arr.map(() => `
        <li>
          <ul class="row">
            ${arr.map(() => {
    number += 1
    return `
                <li class="item number" data-number=${number}>${number}</li>
              `
  }).join('')}
          </ul>
        </li>
      `).join('')}
      <li class="item number" data-number=0>0</li>
    </ul>
  `
}