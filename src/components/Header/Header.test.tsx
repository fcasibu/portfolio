import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import { LinkItem } from './LinkItem'
import { ThemeIcon } from './ThemeIcon'

describe('Header', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })

  it('should display the logo', () => {
    render(<Header />)
    const logo = screen.getByText(/nevz/i)
    expect(logo).toHaveTextContent('nevz')
  })

  it('should display the correct text for LinkItem', () => {
    render(<LinkItem itemName="TEST" />)

    const projects = screen.getByRole('listitem')
    expect(projects).toHaveTextContent('TEST')
  })

  it('should display the correct length of links', () => {
    render(<Header />)

    const listitem = screen.getAllByRole('listitem')
    expect(listitem).toHaveLength(2)
  })

  it('ThemeIcon should change the theme/icon on click', () => {
    let theme = 'light'
    const mockFn = jest.fn(() => {
      theme = theme === 'light' ? 'dark' : 'light'
      rerender(<ThemeIcon theme={theme} themeChange={mockFn} />)
    })
    const { rerender } = render(<ThemeIcon theme={theme} themeChange={mockFn} />)

    const icon = screen.getByRole('button')
    expect(icon).toHaveTextContent('Sun')

    userEvent.click(icon)
    expect(icon).toHaveTextContent('Moon')

    expect(mockFn).toHaveBeenCalled()
  })
})
