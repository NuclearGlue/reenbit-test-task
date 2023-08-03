import styled from 'styled-components';

//Tour list styles
export const TourListBlock = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const TourList = styled.ul`
  display: flex;
  margin-right: 40px;
`;

//Tour Item styles
export const TourItem = styled.li`
  cursor: pointer;
  border-radius: 10px;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &:hover {
    transform: scale(1.03);
    border: solid;
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
  width: 200px;
  height: 200px;
`;
