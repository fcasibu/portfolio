import Button from '../Button';
import { ShowcaseDescription, ShowcaseTitle, ShowcaseWrapper } from './styles';

interface Props {
  scrollToProjects(): void;
}

const Showcase = ({ scrollToProjects }: Props) => {
  return (
    <ShowcaseWrapper>
      <ShowcaseTitle>Hi, I&apos;m Francis</ShowcaseTitle>
      <ShowcaseDescription>I&apos;m a full stack web developer</ShowcaseDescription>
      <Button size="medium" onClick={scrollToProjects}>
        View my projects
      </Button>
    </ShowcaseWrapper>
  );
};

export default Showcase;
