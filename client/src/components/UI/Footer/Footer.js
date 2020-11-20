import React from 'react';

import {
  FooterDiv,
  Copyright
} from '../../../styles/components/UI/Footer/Footer';

const Footer = () => {
  return (
    <FooterDiv>
      <div>
        <Copyright>&copy; {`Copyright ${new Date().getFullYear()} Linky - All Rights Reserved`}</Copyright>
      </div>
    </FooterDiv>
  )
}

export default Footer
