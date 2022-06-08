import { StyledLinkItem } from './styles'

interface Props {
  itemName: string
}

export const LinkItem = ({ itemName }: Props) => {
  return <StyledLinkItem>{itemName}</StyledLinkItem>
}
