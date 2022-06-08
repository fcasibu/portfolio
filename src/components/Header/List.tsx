import { ListItem } from './ListItem'
import { StyledList } from './styles'

export const List = () => {
  return (
    <StyledList>
      <ListItem itemName="Projects" />
      <ListItem itemName="About" />
    </StyledList>
  )
}
