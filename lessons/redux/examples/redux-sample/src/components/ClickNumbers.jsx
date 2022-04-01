import { connect } from 'react-redux'
import { countSelector } from '../selectors'

function ClickNumbersCmp({
  count,
}) {
  return (
    <div>
      Clicked: <span id="value">{count}</span> times
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: countSelector(state)
})

export const ClickNumbers = connect(mapStateToProps)(ClickNumbersCmp)