import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;
`;

export const MyAccountListContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const MyAccount = styled.h2`
  font-size: 15px;
`;

export const UserName = styled.h1`
  font-size: 24px;
  margin-bottom: 0.5rem;
`;

export const Date = styled.p`
  font-size: 16px;
  margin-bottom: 0.5rem;
`;
