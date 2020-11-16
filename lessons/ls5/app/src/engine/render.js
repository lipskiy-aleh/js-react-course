let rootEl

function render(content) {
  while (rootEl.firstChild) {
    rootEl.removeChild(rootEl.firstChild);
  }
  rootEl.appendChild(content)
}

export function init(el, rootController) {
  rootEl = el
  rootEl.addEventListener('click', rootController)
}

export default render