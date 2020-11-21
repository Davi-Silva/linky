import styled from 'styled-components';

export const InvalidPage = styled.div`
  height: 100vh;
  width: 100%;
  background: #68ff5594;
  display: flex;
  flex-direction: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMsg = styled.div`
  background: #33ab33;
  border-radius: 4px;
  padding: 7px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    font-size: 16px;
    color: #fff;
  }
`;