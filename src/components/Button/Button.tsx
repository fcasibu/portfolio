import styled from 'styled-components'

const ButtonSizes = {
  small: '0.5rem',
  medium: '0.5rem 1rem',
  large: '1rem'
}

type Sizes = 'small' | 'medium' | 'large'

interface Props {
  size: Sizes
}

const Button = styled.button<Props>`
  background: var(--theme-text-color);
  color: var(--theme-background);
  border: 0;
  border-radius: 0.2rem;
  padding: ${(props) => ButtonSizes[props.size]};
  cursor: pointer;
  transition: opacity 100ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export default Button
