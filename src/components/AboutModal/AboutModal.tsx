import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import About from '../About';
import Contact from '../Contact';
import { Backdrop, ModalWrapper } from './styles';
import { Carousel } from 'react-responsive-carousel';

interface Props {
  backdropRef: HTMLDivElement | null;
  aboutRef: HTMLDivElement | null;
  close(): void;
}

const AboutModal = ({ backdropRef, aboutRef, close }: Props) => {
  const [media, setMedia] = React.useState({
    matches: window.matchMedia('(min-width: 700px)').matches
  });

  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMedia({ matches: e.matches });
    window.matchMedia('(min-width: 700px)').addEventListener('change', handler);

    return () => {
      window.matchMedia('(min-width: 700px)').removeEventListener('change', handler);
    };
  }, [media.matches]);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalWrapper>
          {!media.matches ? (
            <Carousel showArrows={true} showThumbs={false}>
              <About />
              <Contact />
            </Carousel>
          ) : (
            <>
              <About />
              <Contact />
            </>
          )}
        </ModalWrapper>,
        aboutRef as HTMLDivElement
      )}
      {ReactDOM.createPortal(<Backdrop onClick={close} />, backdropRef as HTMLDivElement)}
    </>
  );
};

export default AboutModal;
