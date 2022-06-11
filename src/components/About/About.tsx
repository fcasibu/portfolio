import { AboutInfo } from './AboutInfo';
import { LanguagesAndTools } from './LanguagesAndTools';
import { StyledAbout } from './styles';
import { aboutData } from '../../data/data';
import { Title } from '../Title';

const About = () => {
  return (
    <StyledAbout>
      <Title>{aboutData.titles.about}</Title>
      <AboutInfo info1={aboutData.info1} info2={aboutData.info2} avatar={aboutData.avatar} />
      <LanguagesAndTools icons={aboutData.ltIcons} title={aboutData.titles.lt} />
    </StyledAbout>
  );
};

export default About;
