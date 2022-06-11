import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    padding-top: 11rem;
    opacity: 0;
  }

  to {
    opacity: 1;
    padding-top: 7rem;
  }
`;

export const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 11rem;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const ShowcaseTitle = styled.h1`
  font-size: 4rem;
  line-height: 1;
`;

export const ShowcaseDescription = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
