import { renderNumbers } from './numbers.js'
import { renderValue } from './value.js'
import { renderOperations } from './operations.js'

export const renderApp = (data) => {
  const content = `
    <div class="app">
      ${renderValue(data.value)}
      ${renderNumbers()}
      ${renderOperations()}
    </div>
  `

  return content
}