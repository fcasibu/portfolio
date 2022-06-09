import { FiCode, FiEye } from 'react-icons/fi';
import { ProjectLink, StyledProjectLinks } from './styles';

interface Props {
  repo: string;
  live: string;
}

export const ProjectLinks = ({ repo, live }: Props) => {
  return (
    <StyledProjectLinks>
      <ProjectLink>
        <a href={live} target="_blank" rel="noreferrer noopener">
          <FiEye />
        </a>
      </ProjectLink>
      <ProjectLink>
        <a href={repo} target="_blank" rel="noreferrer noopener">
          <FiCode />
        </a>
      </ProjectLink>
    </StyledProjectLinks>
  );
};
