import { Icons } from './Icons';
import { ProjectLinks } from './ProjectLinks';
import { ProjectDescription, ProjectImage, ProjectImageWrapper, StyledProjectCard } from './styles';

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
      <ProjectLinks repo={data.repo} live={data.live} />
    </StyledProjectCard>
  );
};
