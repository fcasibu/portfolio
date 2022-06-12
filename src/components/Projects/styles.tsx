import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
`;

export const ProjectsTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 850px) {
    text-align: center;
  }
`;

export const StyledProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 7rem;
  grid-row-gap: 2rem;
  justify-content: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const StyledProjectCard = styled.div<{ isVisible: boolean }>`
  position: relative;
  width: 350px;
  height: 370px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'none' : 'translateY(30px)')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: all 600ms ease-in-out;
  will-change: opacity, visibility;

  @media (max-width: 850px) {
    width: 450px;
    height: 370px;
  }
  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
`;

export const ProjectImage = styled.a<{ title: string, imageURL: string }>`
  position: relative;
  background: ${props => `url(${props.imageURL})`} no-repeat center center;
  background-size: 100% 100%;
  border-radius: 0.5rem;
  height: 250px;
  cursor: pointer;

  &:after {
    content: '${(props) => props.title}';
    position: absolute;
    top: 0;
    display: grid;
    place-items: flex-end;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
    padding-bottom: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 100ms ease-in-out;
  }

  &:hover:after {
    opacity: 1;
    visibility: visible;
  }
`;

/* export const ProjectImage = styled.img`
  height: 150px;
  width: 250px;
  border-radius: 0.5rem;
  @media (max-width: 640px) {
    width: 100%;
    height: 200px;
  }
`; */

export const StyledProjectLinks = styled.ul`
  position: absolute;
  bottom: -5px;
  right: 0;
  display: flex;
  gap: 0.3rem;
  display: flex;

  > * {
    font-size: 1.5rem;
    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }
`;
