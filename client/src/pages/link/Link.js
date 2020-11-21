import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';
import Helmet from 'react-helmet';

import DevFocus from '../../assets/img/dev_focus.svg';

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
        <meta name='description' content='Shrink your path to your destination.' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Shortened URL - Linky'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.REACT_APP_FRONT_END_API}`}
        />
        <meta
          property='og:description'
          content='Shrink your path to your destination.'
        />
        <meta
          property='og:image'
          content={DevFocus}
        />
        <meta property='og:site_name' content='Linky' />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@link' />
        <meta name='twitter:title' content='Shortened URL - Linky' />
        <meta
          name='twitter:description'
          content='Shrink your path to your destination.'
        />
        <meta name='twitter:creator' content='@linky' />
        <meta
          name='twitter:image'
          content={DevFocus}
        />
      </Helmet>
      <AdNavbar handleRedirectToURL={handleRedirectToURL} />
      <h1>{redirectURL}</h1>
    </>
  )
}

export default connect(mapStateToProps)(Link);
