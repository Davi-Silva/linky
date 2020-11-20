import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  Navbar,
  Container,
  Brand,
  SkipAd
} from '../../../styles/components/UI/AdNavbar/AdNavbar';

const mapStateToProps = (state) => {
  const { link } = state;

  return {
    link
  }
}


const AdNavbar = ({ link, handleRedirectToURL }) => {
  const [counter, setCounter] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    if (counter === 0) {
      setIsStopped(true);
    } else {
      let intervalId;

      if (isActive) {
        intervalId = setInterval(() => {
          setCounter(counter => counter - 1);
        }, 1000)
      }
  
      return () => clearInterval(intervalId);
    }
  }, [isActive, counter])
  

  useEffect(() => {
    if (!_.isEmpty(link.data) && !link.loading && !link.error && link.fetched) {
      setIsActive(true);
    }
  }, [link]);

  return (
    <Navbar>
      <Container>
        <div>
          <Brand to='/'>Linky</Brand>
        </div>
        <div>
          {isStopped ? (
            <SkipAd onClick={() => handleRedirectToURL()}>Skip Ad</SkipAd>
          ) : (
            <SkipAd>Skip Ad in {counter}</SkipAd>
          )}
        </div>
      </Container>
    </Navbar>
  )
}

export default connect(mapStateToProps)(AdNavbar);
