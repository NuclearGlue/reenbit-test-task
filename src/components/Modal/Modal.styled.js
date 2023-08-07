import styled from 'styled-components';

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalBlock = styled.div`
  background-color: white;
  border-radiys: 10px;
  padding: 20px;
`;
