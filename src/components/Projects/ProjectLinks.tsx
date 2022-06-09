import { FiCode, FiEye } from 'react-icons/fi';
import { ProjectLink } from './ProjectLink';
import { StyledProjectLinks } from './styles';

interface Props {
  repo: string;
  live: string;
}

export const ProjectLinks = ({ repo, live }: Props) => {
  return (
    <StyledProjectLinks>
      <ProjectLink link={live}><FiEye /></ProjectLink>
      <ProjectLink link={repo}><FiCode /></ProjectLink>
    </StyledProjectLinks>
  );
};
