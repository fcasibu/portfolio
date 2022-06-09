import { Icon, LinksIcons, StyledIcons } from './styles'
import { FiEye, FiCode } from 'react-icons/fi'

interface Props {
  technologies: NodeRequire[]
}

const renderIcons = (technologies: any[]) => {
  const list = []

  for (let i = 0; i < technologies.length; i++) {
    list.push(<Icon src={technologies[i].default} />)
  }

  return list
}

export const Icons = ({ technologies }: Props) => {
  return (
    <StyledIcons>
      {renderIcons(technologies)}
      <LinksIcons>
        <a>
          <FiEye />
        </a>
        <a>
          <FiCode />
        </a>
      </LinksIcons>
    </StyledIcons>
  )
}
