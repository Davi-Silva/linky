import React from 'react';
import Layout from '../../components/Layout';
import Helmet from 'react-helmet';

import DevFocus from '../../assets/img/dev_focus.svg';

import {
  InvalidPage,
  ErrorMsg
} from '../../styles/pages/invalid-link/InvalidLink';

const InvalidLink = () => {
  return (
    <Layout>
      <Helmet>
        <title>Invalid Link - Linky</title>
        <meta name='description' content='Shrink your path to your destination.' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Invalid Link - Linky'
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
        <meta name='twitter:title' content='Invalid Link - Linky' />
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
      <InvalidPage className='fullWidth'>
        <ErrorMsg>
          <p>Invalid Link</p>
        </ErrorMsg>
      </InvalidPage>
    </Layout>
  )
}

export default InvalidLink
