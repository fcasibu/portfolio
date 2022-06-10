import { StyledLinkItem } from './styles';

interface Props {
  itemName: string;
  scrollToProjects?: () => void;
  open?: () => void;
}

export const LinkItem = ({ itemName, scrollToProjects, open }: Props) => {
  return <StyledLinkItem onClick={scrollToProjects || open}>{itemName}</StyledLinkItem>;
};
