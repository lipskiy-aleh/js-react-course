import styled from 'styled-components'

export const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
`

export const MenuItemWrapper = styled.li`
  margin: ${({ theme }) => theme.spacing.s2};
  padding: ${({ theme }) => theme.spacing.s2};
  border: 1px solid black;

  ${(props) => props.active ? 'background-color: blue' : ''}
`