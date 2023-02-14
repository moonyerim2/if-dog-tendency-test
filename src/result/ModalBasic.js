import React from 'react';
import OzCtaBtns from './OzCtaBtns';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: calc(50vh - 25%);
  left: 50%;
  transform: translate(-50%, 50%);
  width: 285px;
  height: 170px;
  padding: 10px 10px 20px;
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
`;

function ModalBasic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <button
        className="close"
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          color: 'red',
          border: 'none',
        }}
        onClick={closeModal}
      >
        X
      </button>
      <OzCtaBtns />
    </Wrapper>
  );
}
export default ModalBasic;
