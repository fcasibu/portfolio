import { AboutPara, Avatar, AvatarWrapper, StyledAboutInfo } from './styles';

interface Props {
  info1: string;
  info2: string;
  avatar: string;
}

export const AboutInfo = ({ info1, info2, avatar }: Props) => {
  return (
    <StyledAboutInfo>
      <AvatarWrapper>
        <Avatar src={avatar} alt="" />
        <AboutPara>{info1}</AboutPara>
      </AvatarWrapper>
      <AboutPara>{info2}</AboutPara>
    </StyledAboutInfo>
  );
};
