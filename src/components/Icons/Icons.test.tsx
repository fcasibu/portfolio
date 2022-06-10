import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Icons from './Icons';
import { Icon } from './Icon';
import { projects } from '../../data/projects';
import { aboutData } from '../../data/data';

describe('Icons', () => {
  it('should display the correct length of tech stack', () => {
    render(<Icons icons={projects[1].technologies} size="small" state="block" />);

    const list = screen.getByRole('list');
    const icons = within(list).getAllByRole('listitem');

    expect(icons).toHaveLength(3);
  });

  it('should display all the icons', () => {
    render(<Icons icons={aboutData.ltIcons} size="small" state="block" />);

    const list = screen.getByRole('list');
    const icons = within(list).getAllByRole('listitem');

    expect(icons).toHaveLength(11);
  });

  it('should display the icon with small size', () => {
    render(<Icon image="" size="small" />);

    const image = document.querySelector('img');

    expect(image).toHaveStyleRule('width', '25px');
    expect(image).toHaveStyleRule('height', '25px');
  });

  it('should display the icon with medium size', () => {
    render(<Icon image="" size="medium" />);

    const image = document.querySelector('img');

    expect(image).toHaveStyleRule('width', '35px');
    expect(image).toHaveStyleRule('height', '35px');
  });
});
