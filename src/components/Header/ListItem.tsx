import { StyledListItem } from './styles'

interface Props {
  itemName: string
}

export const ListItem = ({ itemName }: Props) => {
  return <StyledListItem>{itemName}</StyledListItem>
}
