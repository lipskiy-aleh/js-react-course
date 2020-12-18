import styled from 'styled-components'

const StyledBtn = styled.button`
  border: 1px solid black;
  padding: 10px;
  color: ${props => props.primary ? 'red' : 'black'}
`

export function Button(props) {
  return <StyledBtn primary={props.primary} onClick={props.onClick} {...props}>{props.text}</StyledBtn>
}

export const WrappedBtn = styled(Button)`
  background-color: yellow;
`