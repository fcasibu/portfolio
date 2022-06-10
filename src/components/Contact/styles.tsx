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
  background: var(--theme-text-color);
  padding: 1rem 1.5rem;
  width: 50vw;
  animation: ${slideIn} 0.7s ease-in-out forwards;

  & > * {
    opacity: 0;
    animation: ${fadeIn} 1.2s ease-in-out forwards 0.8s;
  }
`;
