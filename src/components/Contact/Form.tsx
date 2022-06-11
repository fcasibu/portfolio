import * as React from 'react';
import axios from 'axios';
import Button from '../Button';
import { Input, StyledForm, TextArea, Wrapper } from './styles';

export const Form = () => {
  const [inputField, setInputField] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post('https://getform.io/f/ee4eac93-eaf3-48ec-89b3-f8f7a991d526', {
        name: inputField.name,
        email: inputField.email,
        message: inputField.message
      })
      .then(() => {
        setInputField({ name: '', email: '', message: '' });
        setLoading(false);
        alert('Your message has been sent!');
      });
  };

  const handleChange = (event: React.FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setInputField((state) => ({
      ...state,
      [name]: value
    }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={inputField.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={inputField.email}
          onChange={handleChange}
          required
        />
      </Wrapper>
      <TextArea
        name="message"
        placeholder="Message"
        value={inputField.message}
        onChange={handleChange}
        required
      />
      <Button size="medium" type="submit">
        {loading ? 'Sending...' : 'Submit'}
      </Button>
    </StyledForm>
  );
};
