import * as React from 'react';
import { Links } from './Links';
import { Nav, SiteTitle, StyledHeader } from './styles';
import { ThemeIcon } from './ThemeIcon';

interface Props {
  scrollToProjects(): void;
}

const Header = ({ scrollToProjects }: Props) => {
  const [theme, setTheme] = React.useState('light');

  const changeThemeHandler = () => {
    document.documentElement.classList.toggle('dark');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <StyledHeader>
      <Nav>
        <SiteTitle>nevz</SiteTitle>
        <Links scrollToProjects={scrollToProjects} />
        <ThemeIcon theme={theme} changeTheme={changeThemeHandler} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
