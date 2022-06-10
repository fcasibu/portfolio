import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(500px);
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

export const StyledAbout = styled.div`
  background: var(--theme-background);
  padding: 1rem 1.5rem;
  width: 50vw;
  animation: ${slideIn} 0.7s ease-in-out forwards;

  & > * {
    opacity: 0;
    animation: ${fadeIn} 1.2s ease-in-out forwards 0.3s;
  }
`;

export const StyledAboutInfo = styled.div``;

export const StyledLanguagesAndTools = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// Refactor to a different component
export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0.5rem 0;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 125px;
  height: 125px;
`;

// Refactor to a different component
export const AboutPara = styled.p`
  font-size: 0.9rem;
`;
