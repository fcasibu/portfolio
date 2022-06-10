import { LinkItem } from './LinkItem';
import { StyledLinks } from './styles';

interface Props {
  scrollToProjects(): void;
  open(): void;
}

export const Links = ({ scrollToProjects, open }: Props) => {
  return (
    <StyledLinks>
      <LinkItem itemName="Projects" scrollToProjects={scrollToProjects} />
      <LinkItem itemName="About" open={open} />
    </StyledLinks>
  );
};
