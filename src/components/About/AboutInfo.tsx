import { Para } from '../Para';
import { Avatar, AvatarWrapper, StyledAboutInfo } from './styles';

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
        <Para>{info1}</Para>
      </AvatarWrapper>
      <Para>{info2}</Para>
    </StyledAboutInfo>
  );
};
