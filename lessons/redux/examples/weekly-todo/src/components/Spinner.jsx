import { connect } from 'react-redux'
import { PENDING_STATUS } from '../constants'

const SpinnerCmp = ({ status }) => {
  if(status === PENDING_STATUS) {
    return <div>PENDING</div>
  }

  return null
}

function mapStateProps(state) {
  return {
    status: state.common.requestStatus
  }
}

export const Spinner = connect(mapStateProps)(SpinnerCmp)