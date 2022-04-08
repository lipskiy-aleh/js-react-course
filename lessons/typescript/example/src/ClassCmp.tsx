import React from "react";

interface ClassCmpProps {
  name: string
}

interface ClassCmpState {
  name: string
}

export class ClassCmp extends React.Component<ClassCmpProps, ClassCmpState> {
  constructor(props: ClassCmpProps) {
    super(props)

    this.state = {
      name: props.name
    }
  }

  onChange = () => {
    this.setState({ name: 'hello world' })
  }

  render() {
    return (
      <div>Hello world, {this.state.name}, <button onClick={this.onChange}>click</button></div>
    )
  }
}