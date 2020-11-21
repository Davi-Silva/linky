import React from 'react';
import { FaSortDown } from 'react-icons/fa';

import DevFocus from '../../../../assets/img/dev_focus.svg';


import {
  DescriptionDiv,
  DevFocusSvgImg,
  TitleSubtitleDescriptionDiv,
  TitleDescription,
  SubtitleDescription,
} from '../../../../styles/pages/home/Home';

const Description = () => {
  return (
    <>
      <DescriptionDiv className='containerWidth'>
        <div>
          <DevFocusSvgImg src={DevFocus} />
        </div>
        <TitleSubtitleDescriptionDiv>
          <div>
            <TitleDescription>
              Be more productive
            </TitleDescription>
            <SubtitleDescription>
              By shortening your links you shrink read time and document size.
            </SubtitleDescription>
          </div>
          <div>
            <TitleDescription>
              Shareable
            </TitleDescription>
            <SubtitleDescription>
              Shortened links are way more shareable and visually pleasing to the users.
            </SubtitleDescription>
          </div>
        </TitleSubtitleDescriptionDiv>
      </DescriptionDiv>
    </>
  )
}

export default Description
