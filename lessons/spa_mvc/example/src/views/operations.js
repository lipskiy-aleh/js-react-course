import { operations } from '../constants.js'

export const renderOperations = () => {

  return `
    <ul class="operations row">
      ${operations.map(({ text, type }) => `<li class="item operation" data-operation=${type}>${text}</li>`).join('')} 
    </ul>
  `
}