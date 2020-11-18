import React, { useState, useEffect } from 'react'

const ResetPassword = ({ match }) => {
  const [id, setId] = useState();

  useEffect(() => {
    setId(match.url.substring(16, match.url.length));
  }, []);

  return (
    <div>
      <h1>Reset Password: {id}</h1>
    </div>
  )
}

export default ResetPassword
