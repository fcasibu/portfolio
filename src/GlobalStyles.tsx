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

  html {
    background: var(--theme-background);
    color: var(--theme-text-color);
  }
`
