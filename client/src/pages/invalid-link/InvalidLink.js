import React from 'react';
import Layout from '../../components/Layout';

import {
  InvalidPage,
  ErrorMsg
} from '../../styles/pages/invalid-link/InvalidLink';

const InvalidLink = () => {
  return (
    <Layout>
      <InvalidPage className='fullWidth'>
        <ErrorMsg>
          <p>Invalid Link</p>
        </ErrorMsg>
      </InvalidPage>
    </Layout>
  )
}

export default InvalidLink
