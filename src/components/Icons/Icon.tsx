import { IconImage, StyledIcon } from './styles';

interface Props {
  image: string;
  size: 'small' | 'medium';
}

export const Icon = ({ image, size }: Props) => {
  return (
    <StyledIcon>
      <IconImage src={image} alt="" size={size} />
    </StyledIcon>
  );
};
