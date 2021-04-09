import React from 'react'

export function withCreationTime(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.startTime = new Date()
    }

    componentDidMount() {
      const endTime = new Date()
      // console.log(Component.name, this.props ,endTime - this.startTime)
    }

    render() {
      return <Component {...this.props} />
    }
  }
}