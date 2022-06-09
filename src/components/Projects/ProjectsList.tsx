import { StyledProjectsList } from './styles';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectsList = () => {
  return (
    <StyledProjectsList>
      {projects.map((el) => (
        <ProjectCard key={el.title} data={el} />
      ))}
    </StyledProjectsList>
  );
};
