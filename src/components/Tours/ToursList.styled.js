import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs';
//Tour list styles
export const TourListBlock = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const TourList = styled.ul`
  display: flex;
  padding: 15px;
  align-items: center;
`;

export const AddTourButton = styled.button`
  margin-left: 40px;
  margin-right: 40px;
  border: none;
  cursor: pointer;
  padding: 10px;
  &:hover {
    transform: scale(1.03);
    color: #3498db;
  }
`;

export const ArrowLeft = styled(BsArrowBarLeft)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  fill: grey;
  &:hover {
    fill: #3498db;
    transform: scale(1.03);
  }
`;
export const ArrowRight = styled(BsArrowBarRight)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  fill: grey;
  &:hover {
    fill: #3498db;
    transform: scale(1.03);
  }
`;

export const BsPlusLgIcon = styled(BsPlusLg)`
  width: 40px;
  height: 40px;
  fill: grey;

  ${AddTourButton}:hover & {
    fill: #3498db;
  }
`;

export const AddTourButtonText = styled.p`
  font-size: 20px;
`;

//Tour Item styles
export const TourItem = styled.li`
  display: inline-block;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  &:hover {
    transform: scale(1.03);
  }
`;
export const TourInfoBlock = styled.div`
  padding: 10px;
`;
export const TourInfoCity = styled.p`
  text-align: left;
  font-weight: 700;
`;
export const TourInfoDate = styled.p`
  text-align: left;
`;
export const TourImage = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
`;
