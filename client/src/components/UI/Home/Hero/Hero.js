import React from 'react';
import { FaSortDown } from 'react-icons/fa';

import MessagesSVG from '../../../../assets/img/messages.svg';


import {
  HeroFlex,
  TitleSubtitleDiv,
  Title,
  Subtitle,
  SvgImg,
  ArrowDown,
} from '../../../../styles/pages/home/Home';

const Hero = () => {
  return (
    <>
      <HeroFlex className='containerWidth'>
        <TitleSubtitleDiv>
          <Title>
            Linky
          </Title>
          <Subtitle>
            Shrink your path to your destination.
          </Subtitle>
        </TitleSubtitleDiv>
        <div>
          <SvgImg  src={MessagesSVG} alt='Messages'/>
        </div>
      </HeroFlex>
      <ArrowDown>
        <FaSortDown />
      </ArrowDown>
    </>
  )
}

export default Hero
