import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { FiCode } from 'react-icons/fi';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';

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
      <Header scrollToProjects={scrollToProjects} />
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
