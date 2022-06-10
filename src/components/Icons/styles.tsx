import styled from 'styled-components';

export const StyledIcons = styled.ul<{ state: 'block' | 'absolute' }>`
  position: ${(props) => (props.state === 'block' ? 'block' : 'absolute')};
  bottom: 0;
  display: flex;
  gap: 0.3rem;
`;

export const StyledIcon = styled.li``;

export const IconImage = styled.img<{ size: 'small' | 'medium' }>`
  width: ${(props) => (props.size === 'small' ? '25px' : '35px')};
  height: ${(props) => (props.size === 'small' ? '25px' : '35px')};

  @media (max-width: 640px) {
    width: ${(props) => (props.size === 'small' ? '35px' : '45px')};
    height: ${(props) => (props.size === 'small' ? '35px' : '45px')};
  }
`;
