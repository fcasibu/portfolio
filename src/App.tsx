import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { FiCode } from 'react-icons/fi';
import { useModal } from './hooks/useModal';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import AboutModal from './components/AboutModal';

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
`;

const SourceCode = styled.a`
  position: fixed;
  right: 15px;
  bottom: 0;
  font-size: 2rem;
`;

function App() {
  const projectsRef = React.useRef<HTMLDivElement | null>(null);
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const backdropRef = React.useRef<HTMLDivElement | null>(null);
  const { isOpen, open, close } = useModal();

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <div ref={backdropRef}></div>
      <div ref={aboutRef}></div>
      <Header scrollToProjects={scrollToProjects} open={open} />
      {isOpen && (
        <AboutModal
          backdropRef={backdropRef.current}
          aboutRef={aboutRef.current}
          close={close}
        />
      )}
      <Wrapper>
        <Showcase scrollToProjects={scrollToProjects} />
        <Projects ref={projectsRef} />
      </Wrapper>
      <SourceCode
        href="https://github.com/nevz9/portfolio/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiCode />
      </SourceCode>
    </>
  );
}

export default App;
