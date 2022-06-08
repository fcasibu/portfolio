import { LinkItem } from './LinkItem'
import { StyledLinks } from './styles'

export const Links = () => {
  return (
    <StyledLinks>
      <LinkItem itemName="Projects" />
      <LinkItem itemName="About" />
    </StyledLinks>
  )
}
