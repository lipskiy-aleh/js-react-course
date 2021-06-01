import React from 'react'

export class Mark extends React.Component {
  onClick = () => {
    this.props.onMarkClick(this.props.markIndex)
  }

  render() {
    const { disabled } = this.props

    return (
      <button
        disabled={disabled}
        onClick={this.onClick}
      >
        *
      </button>
    )
  }
}