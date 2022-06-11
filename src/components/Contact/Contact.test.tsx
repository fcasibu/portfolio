import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Contact from './Contact';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';

window.alert = jest.fn();

jest.mock('axios');

const url = 'https://getform.io/f/ee4eac93-eaf3-48ec-89b3-f8f7a991d526';

describe('Contact', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<Contact />);

    expect(container).toMatchSnapshot();
  });

  it('should be able to send the form on submit', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    const data = { name: '', email: '', message: '' };
    render(<Form />);

    mockedAxios.post.mockImplementationOnce(() => Promise.resolve(data));
    const input = screen.getAllByRole('textbox');
    const btn = screen.getByRole('button');

    userEvent.type(input[0], 'test');
    userEvent.type(input[1], 'test@test.com');
    userEvent.type(input[2], 'Hello World!');

    userEvent.click(btn);

    expect(screen.getByText('Sending...')).toBeInTheDocument();
    expect(mockedAxios.post).toHaveBeenCalledWith(url, {
      name: 'test',
      email: 'test@test.com',
      message: 'Hello World!'
    });
  });
});
