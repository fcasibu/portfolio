import * as React from 'react';
import { ProjectsList } from './ProjectsList';
import { ProjectsTitle, ProjectsWrapper } from './styles';

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <ProjectsWrapper ref={ref}>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList />
    </ProjectsWrapper>
  );
});

Projects.displayName = 'Projects';

export default Projects;
