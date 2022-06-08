import { FiSun, FiMoon } from 'react-icons/fi'
import { StyledThemeIcon } from './styles'

interface Props {
  theme: string
  themeChange(): void
}

export const ThemeIcon = ({ theme, themeChange }: Props) => {
  return (
    <StyledThemeIcon onClick={themeChange} theme={theme}>
      <span>{theme === 'light' ? <FiSun title="Sun" /> : <FiMoon title="Moon" />}</span>
    </StyledThemeIcon>
  )
}
