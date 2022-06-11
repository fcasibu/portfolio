import Icons from '../Icons';
import { Title } from '../Title';
import { StyledLanguagesAndTools } from './styles';

interface Props {
  icons: NodeRequire[];
  title: string;
}

export const LanguagesAndTools = ({ icons, title }: Props) => {
  return (
    <StyledLanguagesAndTools>
      <Title>{title}</Title>
      <Icons icons={icons} size="medium" state="block" />
    </StyledLanguagesAndTools>
  );
};
