import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

describe('Projects', () => {
  beforeEach(() => {
    const mockFn = jest.fn();
    mockFn.mockReturnValue({
      observe: () => null,
      unobserve: () => null
    });
    window.IntersectionObserver = mockFn;
  });

  it('should render and match the snapshot', () => {
    const { container } = render(<Projects />);

    expect(container).toMatchSnapshot();
  });

  it('should render ProjectCard properly', () => {
    render(<ProjectCard data={projects[4]} />);

    const description = screen.getByText(
      /Battleship. A single player game where the player and computer battles out who sinks the most ships first/i
    );

    expect(description).toBeInTheDocument();
  });

  it('a tags should have the correct link', () => {
    render(<ProjectCard data={projects[4]} />);

    const links = screen.getAllByRole('link') as HTMLLinkElement[];

    expect(links[0].href).toEqual('https://nevz9.github.io/battleship/')
    expect(links[1].href).toEqual('https://nevz9.github.io/battleship/');
    expect(links[2].href).toEqual('https://github.com/nevz9/battleship');
  });
});
