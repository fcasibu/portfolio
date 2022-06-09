import { StyledLinkItem } from './styles';

interface Props {
  itemName: string;
  scrollToProjects?: () => void;
}

export const LinkItem = ({ itemName, scrollToProjects }: Props) => {
  return <StyledLinkItem onClick={scrollToProjects}>{itemName}</StyledLinkItem>;
};
