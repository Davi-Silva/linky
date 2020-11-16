import styled from 'styled-components';

export const Navbar = styled.nav`
  height: 60px;
  width: 100%;
  background: #58d049;
  border-bottom: 1px solid #39a739;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
`;

export const Container = styled.div`
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const Brand = styled.h1`
  font-size: 1.5em;
  color: #fff;
`;

export const Login = styled.button`
  font-size: 16px;
  border: 1px solid #47a947;
  border-radius: 6px;
  padding: 7px;
  background-color: #33ab33;
  color: #fff;
  cursor: pointer;
  transition: all .s ease-in-out;
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