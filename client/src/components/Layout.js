import React from 'react';

import Navigationbar from '../components/UI/Navbar/Navbar';

import {
  LayoutDiv
} from '../styles/Layout';

const Layout = ({ children }) => {
  return (
    <>
      <Navigationbar />
      <LayoutDiv>
        {children}
      </LayoutDiv>
    </>
  )
}

export default Layout;
