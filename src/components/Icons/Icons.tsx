import { Icon } from './Icon';
import { StyledIcons } from './styles';

interface Props {
  icons: any[];
  size: 'small' | 'medium';
  state: 'block' | 'absolute';
}

const Icons = ({ icons, size, state }: Props) => {
  return (
    <StyledIcons state={state}>
      {icons.map((el, index) => (
        <Icon image={el.default} key={index} size={size} />
      ))}
    </StyledIcons>
  );
};

export default Icons;
