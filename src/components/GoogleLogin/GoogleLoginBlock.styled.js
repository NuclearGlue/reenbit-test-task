import styled from 'styled-components';

export const GoogleLoginMain = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;

export const GoogleLoginButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  &:hover {
    transform: scale(1.03);
  }
`;

export const GoogleProfile = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
`;

export const GoogleLogoutButton = styled.button`
  display: inline-block;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  color: #3498db;
  &:hover {
    transform: scale(1.03);
  }
`;
export const GoogleLoginInfo = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 500;
`;

export const GoogleLoginImg = styled.img`
  border-radius: 50%;
`;
