import * as ReactDOM from 'react-dom';
import About from '../About';
import Contact from '../Contact';
import { Backdrop, ModalWrapper } from './styles';

interface Props {
  backdropRef: HTMLDivElement | null;
  aboutRef: HTMLDivElement | null;
  close(): void;
}

const AboutModal = ({ backdropRef, aboutRef, close }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalWrapper>
          <About />
          <Contact />
        </ModalWrapper>,
        aboutRef as HTMLDivElement
      )}
      {ReactDOM.createPortal(<Backdrop onClick={close} />, backdropRef as HTMLDivElement)}
    </>
  );
};

export default AboutModal;
