import { LinkItem } from './LinkItem';
import { StyledLinks } from './styles';

interface Props {
  scrollToProjects(): void;
}

export const Links = ({ scrollToProjects }: Props) => {
  return (
    <StyledLinks>
      <LinkItem itemName="Projects" scrollToProjects={scrollToProjects} />
      <LinkItem itemName="About" />
    </StyledLinks>
  );
};
