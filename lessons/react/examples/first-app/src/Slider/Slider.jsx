import React from 'react'
import './slider.css'
import { Mark } from './Mark'

export class Slider extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentIndex: props.defaultIndex,
      content: props.content,
    }
  }

  static defaultProps = {
    defaultIndex: 0
  }

  onClickLeft = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1
    })
  }

  onClickRight = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  onMarkClick = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const { currentIndex, content } = this.state

    return (
      <div className="wrapper">
        <div>
          {this.state.content.map((_, index) => (
            <Mark
              key={index}
              disabled={index === currentIndex}
              onMarkClick={this.onMarkClick}
              markIndex={index}
            />
          ))}
        </div>
        <div className="slider">
          <button
            disabled={currentIndex === 0}
            className="arrow"
            onClick={this.onClickLeft}
          >
            {'<'}
          </button>

          <div className="content">
            {content[currentIndex]}
          </div>

          <button
            disabled={currentIndex === content.length - 1}
            className="arrow"
            onClick={this.onClickRight}
          >
            {'>'}
          </button>
        </div>
      </div>
    )
  }
} 