import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import Button from './Button'

describe('Button', () => {
  it('should render the correct sizes', () => {
    const { rerender } = render(<Button size="small" />);

    const button = screen.getByRole('button')
    expect(button).toHaveStyleRule('padding', '0.5rem')

    rerender(<Button size="medium" />)
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem')

    rerender(<Button size="large" />)
    expect(button).toHaveStyleRule('padding', '1rem')
  })
})

