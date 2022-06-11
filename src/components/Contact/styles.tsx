import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-500px);
  }

  to {
    transform; translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: var(--theme-background-secondary);
  padding: 1rem 1.5rem;
  width: 600px;
  animation: ${slideIn} 0.5s ease-in-out forwards;

  & > * {
    opacity: 0;
    animation: ${fadeIn} 1.2s ease-in-out forwards 0.8s;
  }
@media (max-width: 700px) {
    width: 100%;
    height: 450px;
  }

`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  > button {
    align-self: flex-end;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  background: var(--theme-background-tertiary);
  color: var(--theme-text-color);
  border: 0;
  outline: 0;
  width: 100%;
  padding: 0.3rem;
`;

export const TextArea = styled.textarea`
  background: var(--theme-background-tertiary);
  color: var(--theme-text-color);
  border: 0;
  outline: 0;
  width: 100%;
  height: 150px;
  padding: 0.3rem;
  resize: none;
`;
