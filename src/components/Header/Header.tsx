import * as React from 'react';
import { List } from './List'
import { Nav, StyledHeader } from './styles'
import { ThemeIcon } from './ThemeIcon'

const Header = () => {
  const [theme, setTheme] = React.useState('light');

  const themeChangeHandler = () => {
    document.documentElement.classList.toggle('dark');
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <StyledHeader>
      <Nav>
        <List />
        <ThemeIcon theme={theme} themeChange={themeChangeHandler}/>
      </Nav>
    </StyledHeader>
  )
}

export default Header