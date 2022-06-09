import Button from '../Button'
import { ShowcaseDescription, ShowcaseTitle, ShowcaseWrapper } from './styles'

const Showcase = () => {
  return (
    <ShowcaseWrapper>
      <ShowcaseTitle>Hi, I&apos;m Francis</ShowcaseTitle>
      <ShowcaseDescription>I&apos;m a full stack web developer</ShowcaseDescription>
      <Button size="medium">View my projects</Button>
    </ShowcaseWrapper>
  )
}

export default Showcase
