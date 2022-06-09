import { Icons } from './Icons';
import { FiEye, FiCode } from 'react-icons/fi';
import {
  LinksIcons,
  ProjectDescription,
  ProjectImage,
  ProjectImageWrapper,
  StyledProjectCard
} from './styles';

interface Data {
  title: string;
  description: string;
  repo: string;
  live: string;
  image: string;
  technologies: NodeRequire[];
}

interface Props {
  data: Data;
}

export const ProjectCard = ({ data }: Props) => {
  return (
    <StyledProjectCard>
      <ProjectImageWrapper title={data.title}>
        <ProjectImage src={data.image} />
      </ProjectImageWrapper>
      <ProjectDescription>{data.description}</ProjectDescription>
      <Icons technologies={data.technologies} />
      <LinksIcons>
        <a href={data.live} target="_blank" rel="noreferrer noopener">
          <FiEye />
        </a>
        <a href={data.repo} target="_blank" rel="noreferrer noopener">
          <FiCode />
        </a>
      </LinksIcons>
    </StyledProjectCard>
  );
};
