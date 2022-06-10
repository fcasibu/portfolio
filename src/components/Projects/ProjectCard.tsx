import * as React from 'react';
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
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    })
    observer.observe(cardRef.current as HTMLDivElement);
    return () => observer.unobserve(cardRef.current as HTMLDivElement);
  }, [])

  return (
    <StyledProjectCard ref={cardRef} isVisible={isVisible}>
      <ProjectImageWrapper title={data.title}>
        <ProjectImage src={data.image} />
      </ProjectImageWrapper>
      <ProjectDescription>{data.description}</ProjectDescription>
      <Icons technologies={data.technologies} />
      <ProjectLinks repo={data.repo} live={data.live} />
    </StyledProjectCard>
  );
};
