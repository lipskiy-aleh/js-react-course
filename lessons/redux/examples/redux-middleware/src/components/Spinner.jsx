import { Spin } from 'antd';
import { useSelector } from 'react-redux'
import { fetching as fetchingSelector } from '../selectors/appSelectors'

export const Spinner = function SpinnerCmp() {
  const fetching = useSelector(fetchingSelector)

  if (!fetching) {
    return null
  }

  return (
    <div style={{}} className="spinner">
      <Spin tip="Loading...">
      </Spin>
    </div>
  )
}

// export const Spinner = memo(SpinnerCmp)