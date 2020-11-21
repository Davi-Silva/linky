import React from 'react';
import Layout from '../../components/Layout';
import Helmet from 'react-helmet';

import {
  InvalidPage,
  ErrorMsg
} from '../../styles/pages/invalid-link/InvalidLink';

const InvalidLink = () => {
  return (
    <Layout>
      <Helmet>
        <title>Invalid Link - Linky</title>
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
