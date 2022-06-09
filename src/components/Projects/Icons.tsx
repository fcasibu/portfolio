import { Icon } from './Icon';
import { StyledIcons } from './styles';

interface Props {
  technologies: any[];
}

export const Icons = ({ technologies }: Props) => {
  return (
    <StyledIcons>
      {technologies.map((el, index) => (
        <Icon image={el.default} key={index} />
      ))}
    </StyledIcons>
  );
};
