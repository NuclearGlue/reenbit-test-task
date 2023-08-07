import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';

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
  width: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CrossModal = styled(RxCross1)`
  width: 28px;
  height: 28px;
  color: grey;
  cursor: pointer;
  &:hover {
    color: blue;
    transform: scale(1.03);
  }
`;
export const ModalCrossClose = styled.button`
  border: none;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const ModalLabel = styled.label`
  margin-bottom: 15px;
  font-size: 18px;
`;

export const ModalSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 19px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  border-radius: 40px;
  outline: none;
`;

export const ModalInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 19px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  border-radius: 40px;
`;

export const ModalButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButtonCancel = styled.button`
  padding: 10px 15px;
  margin-right: 20px;
  background-color: white;
  border-radius: 10px;
  border-color: gray;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ModalButtonSave = styled.button`
  padding: 10px 15px;
  background-color: #51a5f4;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  &:hover {
    transform: scale(1.05);
  }
`;
