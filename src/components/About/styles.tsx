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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  width: 50vw;
  animation: ${slideIn} 0.5s ease-in-out forwards;

  & > * {
    opacity: 0;
    animation: ${fadeIn} 1.2s ease-in-out forwards 0.3s;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 90vh;
  }
`;

export const StyledAboutInfo = styled.div``;

export const StyledLanguagesAndTools = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  max-width: 125px;
  max-height: 125px;
`;
