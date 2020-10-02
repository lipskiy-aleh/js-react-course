async function test() {
  console.log('test function')
  await (() => console.log('await'))()
  // debugger
}

function test2() {
  console.log('Test 2')
  console.log('Test 3')
}
test2()

export default test
