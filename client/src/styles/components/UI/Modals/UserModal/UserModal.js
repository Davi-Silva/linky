import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  /* height: 100px; */
  width: 100px;
  position: absolute;
  top: 67px;
  background: #33ab33;
  border-radius: 4px;
  border: 1px solid #47a947;
`;

export const FlexList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FlexListItem = styled(Link)`
  padding: 8px 0;
  font-size: 16px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition: all .2s ease-in-out;
  &:hover {
    background-color: #2da22d;
  }
  &:active {
    background-color: #278c27;
  }
`;
export const FlexListItemButton = styled.button`
  padding: 8px 0;
  font-size: 16px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  border: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #2da22d;
  }
  &:active {
    background-color: #278c27;
  }
`;