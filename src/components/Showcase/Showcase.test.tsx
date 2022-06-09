import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Showcase from './Showcase';

describe('Showcase', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<Showcase scrollToProjects={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the elements properly', () => {
    render(<Showcase scrollToProjects={jest.fn()} />);
    const title = screen.getByRole('heading', { name: /hi, i'm francis/i });
    const description = screen.getByText(/i'm a full stack web developer/i);
    const button = screen.getByRole('button', { name: /view my projects/i });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
