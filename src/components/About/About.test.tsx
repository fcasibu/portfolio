import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';
import { AboutInfo } from './AboutInfo';

describe('About Me', () => {
  it('should render properly and match the snapshot', () => {
    const { container } = render(<About />);

    expect(container).toMatchSnapshot();
  });

  it('should render the info correctly', () => {
    render(<AboutInfo info1="Hello" info2="World" avatar="" />);

    const info1 = screen.getByText(/hello/i);
    const info2 = screen.getByText(/world/i);

    expect(info1).toBeInTheDocument();
    expect(info2).toBeInTheDocument();
  });
});
