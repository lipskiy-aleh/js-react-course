import { connect } from 'react-redux'
import { List } from 'antd';
import { getUsersList } from '../selectors/usersSelectors'
import { fetchUsersAction } from '../actions/usersActions'
import { useEffect } from 'react';

function UsersCmp({
  users,
  fetchUsers
}) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={({ firstName, lastName }) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="">{`${firstName} ${lastName}`}</a>}
          // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  )
}

const mapStateToProps = (state) => ({
  users: getUsersList(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsersAction())
})

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersCmp)