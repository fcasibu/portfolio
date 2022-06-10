import Icons from '../Icons';
import { StyledLanguagesAndTools } from './styles';

interface Props {
  icons: NodeRequire[];
}

export const LanguagesAndTools = ({ icons }: Props) => {
  return (
    <StyledLanguagesAndTools>
      <Icons icons={icons} size="medium" state="block" />
    </StyledLanguagesAndTools>
  );
};
