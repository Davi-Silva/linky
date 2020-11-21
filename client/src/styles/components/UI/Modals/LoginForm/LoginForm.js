import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const FormDiv = styled.div`
  position: fixed;
  width: 250px;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  z-index: 9;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 520px) {
    max-height: 85%;
    overflow-y: scroll; 
  }
  @media (max-height: 440px) {
    max-height: 80%;
  }
  @media (max-height: 440px) {
    max-height: 75%;
  }
`;

export const Heading = styled.h1`
  color: #18840f;
  font-size: 17px;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const SplitDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 0.25rem;
`;


export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  border: 1px solid #b8c4c2;
  border-radius: 4px;
  background: #ffffff;
  transition: all 0.2s ease-in-out 0s;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
`;

export const Submit = styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  border: 1px solid #47a947;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 1px;
  background-color: #33ab33;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
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

export const Warning = styled.div`
  border: 1px solid #d426269e;
  background-color: #d426260f;
  display: table;
  margin: 5px auto;
  border-radius: 5px;
  padding: 5px 8px;
  color: #d42626;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: center;
`;

export const Button = styled.button`
  display: table;
  margin: 4px auto;
  background: transparent;
  border: none;
  color: #18840f;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;