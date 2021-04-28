
function asyncFunc() {
  return new Promise((res,rej) => {
    setTimeout(() => {
      res('Test')
    },1000)
  })
}
module.exports = asyncFunc


async function makeRequest(url, options) {
  try {
    const res = await fetch(url, options)
    
    // proceed status
    if(status === 400) {
      return {failed: true, reason: res.statusText}
    }

    const data = await res.json()
    return {
      data,
      failed: false
    }

  } catch (error) {
    return {
      failed: true,
      reason: error.msg
    }
  }
}