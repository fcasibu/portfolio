import { IconImage, StyledIcon } from './styles';

interface Props {
  image: string;
}

export const Icon = ({ image }: Props) => {
  return (
    <StyledIcon>
      <IconImage src={image} alt="" />
    </StyledIcon>
  );
};
