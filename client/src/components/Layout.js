import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navigationbar from '../components/UI/Navbar/Navbar';
import Footer from '../components/UI/Footer/Footer';
import { decodeAccessToken } from '../store/actions/user/user';

import {
  LayoutDiv
} from '../styles/Layout';

let count = 0;

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (count === 0) {
      dispatch(decodeAccessToken());
      count += 1;
    }
  }, []);

  return (
    <>
      <Navigationbar />
      <LayoutDiv>
        {children}
      </LayoutDiv>
      <Footer />
    </>
  )
}

export default Layout;
