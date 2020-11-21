import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

const ResetPassword = ({ match }) => {
  const [id, setId] = useState();

  useEffect(() => {
    setId(match.url.substring(16, match.url.length));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Reset Password - Linky</title>
      </Helmet>
      <h1>Reset Password: {id}</h1>
    </div>
  )
}

export default ResetPassword
