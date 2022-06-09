import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should render the whole app and match te snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
  it('should call scrollIntoView', () => {
    const mockFn = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = mockFn;

    render(<App />);

    const nav = screen.getByRole('navigation');
    const buttonNav = within(nav).getByText(/projects/i);
    const button = screen.getByRole('button', { name: /view my projects/i });
    userEvent.click(button);
    userEvent.click(buttonNav);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
