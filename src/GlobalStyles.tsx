import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --theme-background: #fff;
    --theme-text-color: #3d3d3d;
  }

  html.dark {
    --theme-background: #3d3d3d;
    --theme-text-color: #fff;
  }

  body {
    background: var(--theme-background);
    color: var(--theme-text-color);
    font-family: 'Public Sans', sans-serif;
  }

  li {
    list-style-type: none;
  }

  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
