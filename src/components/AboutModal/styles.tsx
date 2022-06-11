import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  color: var(--theme-text-color);
  width: 800px;
  height: 450px;
  z-index: 100;

  @media (max-width: 840px) {
    width: 90%;
  }

`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;
