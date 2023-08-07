import styled from 'styled-components';
import magnifyingGlass from './magnifying-glass.svg';
export const SearchInput = styled.input`
  font-size: 14px;
  line-height: 19px;
  width: 50%;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 40px;
  background-image: url('${magnifyingGlass}');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  border-radius: 40px;
  border: none;
`;
