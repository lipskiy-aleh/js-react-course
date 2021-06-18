import React, { useState, useEffect } from 'react'

// export function makeAsync(importFunc, cmpName) {
//   return class AsyncCmp extends React.Component {
//     state = {
//       cmp: null
//     }

//     async componentDidMount() {
//       const data = await importFunc()

//       const Cmp = data[cmpName || 'default']

//         this.setState({
//           cmp: Cmp
//         })
//     }

//     render() {
//       const { cmp: Cmp } = this.state
//       return Cmp && <Cmp {...this.props}/>
//     }
//   }
// }

export function makeAsync(importFunc, cmpName) {
  return (props) => {
    const [cmp, setCmp] = useState({cmp: null})

    useEffect(() => {
      (async () => {
        const importedModule = await importFunc()
        const Cmp = importedModule[cmpName || 'default']

        setCmp({cmp: Cmp})
      })()
    }, [])

    if(!cmp.cmp) {
      return null
    }

    const Cmp = cmp.cmp
    return <Cmp {...props} />
  }
}