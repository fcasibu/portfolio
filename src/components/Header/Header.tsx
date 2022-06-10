import * as React from 'react';
import { Links } from './Links';
import { Nav, SiteTitle, StyledHeader } from './styles';
import { ThemeIcon } from './ThemeIcon';

interface Props {
  scrollToProjects(): void;
  open(): void;
}

const Header = ({ scrollToProjects, open }: Props) => {
  const [theme, setTheme] = React.useState('light');

  const changeThemeHandler = () => {
    document.documentElement.classList.toggle('dark');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <StyledHeader>
      <Nav>
        <SiteTitle>nevz</SiteTitle>
        <Links scrollToProjects={scrollToProjects} open={open} />
        <ThemeIcon theme={theme} changeTheme={changeThemeHandler} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
