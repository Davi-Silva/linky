import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';
import Helmet from 'react-helmet';

import { getLink } from '../../store/actions/link/link';

import AdNavbar from '../../components/UI/AdNavbar/AdNavbar'

const mapStateToProps = (state) => {
  const { link } = state;

  return {
    link
  }
}

const Link = ({ match, history, link }) => {
  const [redirectURL, setRedirectURL] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLink(match.url.substring(1, match.url.length)));
  }, []);

  useEffect(() => {
    if (!_.isEmpty(link.data) && !link.loading && !link.error && link.fetched) {
      setRedirectURL(link.data.results.originalURL);
    }
    if (link.error) {
      history.push('/invalid/link');
    }
  }, [link]);

  const handleRedirectToURL = () => {
    window.location.href = redirectURL;
  }

  return (
    <>
      <Helmet>
        <title>Shortened URL - Linky</title>
      </Helmet>
      <AdNavbar handleRedirectToURL={handleRedirectToURL} />
      <h1>{redirectURL}</h1>
    </>
  )
}

export default connect(mapStateToProps)(Link);
