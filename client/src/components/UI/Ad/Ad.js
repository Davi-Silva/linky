import React from 'react';
import { Bling as GPT } from 'react-gpt';

// GPT.enableSingleRequest();

const Ad = () => {
  return (
    <div id="ad-1">
      <GPT
        adUnitPath="/4595/nfl.test.open"
        sizeMapping={[
            {viewport: [0, 0], slot: [320, 50]},
            {viewport: [750, 0], slot: [728, 90]},
            {viewport: [1050, 0], slot: [1024, 120]}
        ]}
      />
    </div>
  )
}

export default Ad;
