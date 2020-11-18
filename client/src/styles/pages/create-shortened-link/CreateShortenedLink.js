import styled from 'styled-components';

export const ShortenerDiv = styled.div`
  width: 90%;
  margin: 40px auto;
`;

export const Form = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 580px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
    margin-bottom: 75px;
  }
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;
  font-size: 16px;
  display: block;
  padding-left: 15px;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  ${(props) => props.warning ? 'border-top: 1px solid #ce4343; border-bottom: 1px solid #ce4343; border-left: 1px solid #ce4343; border-right: 1px solid transparent;' : ' border-top: 1px solid #b8c4c2; border-bottom: 1px solid #b8c4c2; border-left: 1px solid #b8c4c2; border-right: 1px solid transparent;'}
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: #ffffff;
  transition: all 0.2s ease-in-out 0s;
  &:focus {
    ${(props) => props.warning ? 'border-top: 1px solid #ce4343; border-bottom: 1px solid #ce4343; border-left: 1px solid #ce4343; border-right: 1px solid transparent;' : ' border-top: 1px solid #18840f; border-bottom: 1px solid #18840f; border-left: 1px solid #18840f; border-right: 1px solid transparent;'}
    outline: none;
  }
  @media (max-width: 580px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
    border-radius: 4px;
    ${(props) => props.warning ? 'border: 1px solid #ce4343;' : ' border: 1px solid #b8c4c2;'}
    &:focus {
      ${(props) => props.warning ? 'border: 1px solid #ce4343;' : ' border: 1px solid #18840f;'}
      outline: none;
    }
  }
`;

export const Button = styled.button`
  font-size: 16px;
  color: #fff;
  padding: 7px;
  border: 1px solid #15710d;
  background-color: #18840f;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 45px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (max-width: 580px) {
    border-radius: 4px;
  }
`;