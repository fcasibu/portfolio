import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
  backdrop-filter: blur(8px);
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

export const StyledLinks = styled.ul`
  display: flex;
  gap: 0.5rem;
`

export const StyledLinkItem = styled.li`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const SiteTitle = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
`

export const StyledThemeIcon = styled.button`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  background: ${(props) => (props.theme === 'light' ? '#dcdcdc' : '#525252')};
  color: ${(props) => (props.theme === 'light' ? '#525252' : '#dcdcdc')};
  border: 0;
  border-radius: 0.2rem;
  padding: 0.3rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background: ${(props) => (props.theme === 'light' ? '#525252' : '#dcdcdc')};
    color: ${(props) => (props.theme === 'light' ? '#dcdcdc' : '#525252')};
  }

  > * {
    width: 16px;
    height: 16px;
  }
`
