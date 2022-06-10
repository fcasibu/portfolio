import { AboutInfo } from './AboutInfo';
import { LanguagesAndTools } from './LanguagesAndTools';
import { StyledAbout, Title } from './styles';
import { aboutData } from '../../data/data';

const About = () => {
  return (
    <StyledAbout>
      <Title>{aboutData.titles.about}</Title>
      <AboutInfo info1={aboutData.info1} info2={aboutData.info2} avatar={aboutData.avatar} />
      <Title>{aboutData.titles.lt}</Title>
      <LanguagesAndTools icons={aboutData.ltIcons} />
    </StyledAbout>
  );
};

export default About;
