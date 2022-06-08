import { FiSun, FiMoon } from 'react-icons/fi'
import { StyledThemeIcon } from './styles'

interface Props {
  theme: string
  changeTheme(): void
}

export const ThemeIcon = ({ theme, changeTheme }: Props) => {
  return (
    <StyledThemeIcon onClick={changeTheme} theme={theme}>
      <span>{theme === 'light' ? <FiSun title="Sun" /> : <FiMoon title="Moon" />}</span>
    </StyledThemeIcon>
  )
}
