import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {
  SlideDrawerClose,
  SlideDrawerOpen,
  ShowBackground,
  HideBackground
} from '../../../../animations/Animations';

const openDrawer = css`
  animation: ${SlideDrawerOpen} 0.2s ease-in-out forwards;
`;

const closeDrawer = css`
  animation: ${SlideDrawerClose} 0.2s ease-in-out forwards;
`;

const showBackground = css`
  animation: ${ShowBackground} 0.2s ease-in-out forwards;
`;

const hideBackground = css`
  animation: ${HideBackground} 0.2s ease-in-out forwards;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.15);
  ${(props) => props.openUserModal ? hideBackground : showBackground};
`;

export const DrawerDiv = styled.div`
  width: 200px;
  left: 0;
  top: 0px;
  height: 100%;
  position: fixed;
  border: 1px solid #58d049;
  background: #fff;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  transform: translateX(-210px);
  ${(props) => props.openUserModal ? openDrawer : closeDrawer};
  overflow: hidden;
  z-index: 9999;
`;

export const List = styled.div`
  width: 100%;
`;

export const ListItem = styled(Link)`
  width: 100%;
  font-size: 16px;
  color: #33ab33;
  -webkit-text-decoration: none;
  text-decoration: none;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  transition: all .15s ease-in-out;
  &:hover {
    background: #2da22d47;
  }
  &:active {
    background: #2da22d61;
  }
`;

export const LogoutButton = styled.button`
  font-size: 16px;
  border: 1px solid #47a947;
  border-radius: 6px;
  padding: 7px;
  background-color: #33ab33;
  color: #fff;
  margin-left: 15px;
  margin-top: 15px;
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