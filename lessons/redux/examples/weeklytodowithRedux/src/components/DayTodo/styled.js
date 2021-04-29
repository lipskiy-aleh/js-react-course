import { Card, Checkbox } from 'antd'
import styled from 'styled-components'

export const StyledCard = styled(Card).attrs({
  bordered: true,
  bodyStyle: { padding: 0 },
})`
  margin: 8px;
`

export const CardContent = styled.div`
  height: 500px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TodoCheckbox = styled(Checkbox)`
  text-decoration: ${({checked}) => checked ? 'line-through' : 'none'}
`