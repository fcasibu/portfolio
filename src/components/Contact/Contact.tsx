import { Para } from '../Para';
import { Title } from '../Title';
import { Form } from './Form';
import { StyledContact } from './styles';

const Contact = () => {
  return (
    <StyledContact>
      <Title>Contact Me</Title>
      <Para>
        I’m very interested in working with projects. If you have any questions or want to work
        together, don’t hesitate to contact me using the form below. I will get back to you as soon
        as possible.
      </Para>
      <Form />
    </StyledContact>
  );
};

export default Contact;
