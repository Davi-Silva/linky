import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
  margin-top: 20px;
  @media (max-width: 580px) {
    grid-template-columns: unset;
  }
`;

export const A = styled.a`
  text-decoration: none;
`;

export const LinkDiv = styled.div`
  border: 1px solid #b8c4c2;
  border-radius: 4px;
  padding: 13px;
`;

export const LinkNewUrl = styled.p`
  font-size: 16px;
  font-weight: 900;
  color: #18840f;
  margin-bottom: 1rem;
  word-break: break-all;
`;

export const LinkOldUrl = styled.p`
  font-size: 14px;
  color: #000;
  margin-bottom: 0.5rem;
  word-break: break-all;
`;