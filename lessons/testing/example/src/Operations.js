

function operation(operator, a, b) {
  if(!operator) {
    throw new Error('Operator should be define')
  }

  return operator(a,b)
}

module.exports = operation