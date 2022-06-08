import { List } from './List'
import { Nav, StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <List />
      </Nav>
    </StyledHeader>
  )
}

export default Header
