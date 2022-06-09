import { Icons } from './Icons'
import { FiEye, FiCode } from 'react-icons/fi'
import { LinksIcons, ProjectDescription, ProjectImage, StyledProjectCard } from './styles'

interface Data {
  title: string
  description: string
  image: string
  technologies: NodeRequire[]
}

interface Props {
  data: Data
}

export const ProjectCard = ({ data }: Props) => {
  console.log(data.image)
  return <StyledProjectCard>
    <ProjectImage src={data.image}/>
   <ProjectDescription>{data.description}</ProjectDescription>
    <Icons technologies={data.technologies}/>
      <LinksIcons>
        <a>
          <FiEye />
        </a>
        <a>
          <FiCode />
        </a>
      </LinksIcons>

  </StyledProjectCard>
}
