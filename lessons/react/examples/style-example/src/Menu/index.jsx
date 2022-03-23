import { MenuWrapper, MenuItemWrapper } from './styled'

export function Menu({ items, className, size }) {

  console.log(size)

  return (
    <nav className={className}>
      <MenuWrapper>
        {items.map(({ title, active = false }) => (
          <MenuItemWrapper key={title} active={active}>
            {title}
          </MenuItemWrapper>
        ))}
      </MenuWrapper>
    </nav>
  )
}