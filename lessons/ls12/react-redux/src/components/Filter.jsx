import React from 'react'
import { connect } from 'react-redux'

import { changeFilterAction } from '../redux/actions/filterActions'

class Filter extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', width: '200px', justifyContent: 'space-between', marginBottom: '20px'}}>
        <button
          disabled={this.props.filter === 'all'}
          onClick={() => this.props.onChangeFilter('all')}
        >All</button>
        <button
          disabled={this.props.filter === 'undone'}
          onClick={() => this.props.onChangeFilter('undone')}
        >Undone</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (type) => dispatch(changeFilterAction(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)