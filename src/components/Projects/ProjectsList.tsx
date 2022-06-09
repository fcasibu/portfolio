import { StyledProjectsList } from './styles'
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

const renderCards = () => {
  const list = [];

  for(let i = 0; i < projects.length; i++) {
    list.push(<ProjectCard data={projects[i]}/>)
  }

  return list;
}

export const ProjectsList = () => {
  return <StyledProjectsList>
    {renderCards()}
  </StyledProjectsList>
}
