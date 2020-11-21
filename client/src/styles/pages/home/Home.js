import styled from 'styled-components';
import { Floating } from '../../animations/Animations';

export const HeroFlex = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    justify-content: space-between;
  }
  @media (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleSubtitleDiv = styled.div`
  @media (max-width: 670px) {
    margin-bottom: 2.5rem;
  }
`;

export const Title = styled.h1`
  color: #33ab33;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  @media (max-width: 670px) {
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  color: #888888;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  @media (max-width: 670px) {
    text-align: center;
  }
`;

export const SvgImg = styled.img`
  height: 250px;
  @media (max-width: 500px) {
    height: 200px;
  }
  @media (max-width: 390px) {
    height: 170px;
  }
  @media (max-width: 310px) {
    height: 120px;
  }
`;

export const DevFocusSvgImg = styled.img`
  width: 300px;
  @media (max-width: 500px) {
    width: 260px;
  }
  @media (max-width: 390px) {
    width: 210px;
  }
  @media (max-width: 310px) {
    width: 180px;
  }
`;

export const ArrowDown = styled.div`
  height: 40px;
  width: 100%;
  padding-bottom: 30px;
  svg {
    height: 30px;
    width: 30px;
    display: table;
    margin: 0 auto;
    color: #33ab33;
    animation: ${Floating} 2s ease-in-out infinite;
  }
`;

export const ShortenerTitle = styled.h3`
  font-size: 16px;
  color: #33ab33;
  margin-bottom: 0.5rem;
`;

export const ShortenerDiv = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  padding: 80px 0;
`;

export const ShortenerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f3f3f3;
`;

export const RecentlyCreatedLinksListDiv = styled.div`
  /* width: 90%;
  margin: 0 auto; */
`;

export const TitleFormDiv = styled.div`
  display: block;
  width: 90%;
  margin: 0 auto;
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

export const ShortenerButton = styled.button`
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

export const DescriptionDiv = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    justify-content: space-between;
  }
  @media (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleSubtitleDescriptionDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  @media (max-width: 915px) {
    margin-left: 30px;
  }
  @media (max-width: 670px) {
    margin-left: 0px;
    margin-top: 30px;
  }
`;

export const TitleDescription = styled.h1`
  color: #33ab33;
  font-size: 20px;
  margin-bottom: 0.5rem;
  @media (max-width: 670px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const SubtitleDescription = styled.h2`
  color: #888888;
  font-size: 16px;
  @media (max-width: 670px) {
    text-align: center;
  }
`;