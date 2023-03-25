import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import { ModalContainer, Background } from './modal.styles';

export const Modal = ({
  showModal,
  setShowModal,
  modalType,
  route,
  children,
  ...props
}: any) => {
  const modalRef = useRef();
  const router = useRouter();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: { target: undefined }) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        // console.log("I pressed");
        if (modalType === 'auth') {
          router.push(route);
        }
      }
    },
    [modalType, route, router, setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <Background
          onClick={closeModal}
          ref={modalRef}
          {...props}
          className="demo"
        >
          <animated.div styled={animation} {...props}>
            <ModalContainer showModal={showModal} {...props}>
              {children}
            </ModalContainer>
          </animated.div>
        </Background>
      )}
    </>
  );
};

export default Modal;
