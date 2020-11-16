import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Background,
  FormDiv,
  Heading,
  Form,
  Input,
  Label,
  Submit,
  Warning
} from '../../../../styles/components/UI/Modals/LoginForm/LoginForm';

const LoginForm = ({ handleToggleLoginForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const checkValidForm = () => {
    if (email.length > 0 && password.length > 0) {
      setWarning(false);
      setWarningMessage('');
      return true;
    } else {
      setWarning(true);
      setWarningMessage('All fields must be filled');
      return false;
    }
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (checkValidForm()) {
      console.log(email, password)
    }
  }

  return (
    <>
      <Background onClick={() => handleToggleLoginForm()} />
      <FormDiv>
        <Heading>| Login</Heading>
        <Form onSubmit={(e) => handleSubmitLogin(e)}>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            value={email}
            onChange={(e) => onChangeEmail(e)}
          />
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            value={password}
            onChange={(e) => onChangePassword(e)}
          />
          <Submit type='submit'>Login</Submit>
          {warning && warningMessage.length > 0 && (
            <Warning>{warningMessage}</Warning>
          )}
        </Form>
      </FormDiv>
    </>
  )
}

LoginForm.propTypes = {
  handleToggleLoginForm: PropTypes.func.isRequired,
}

export default LoginForm;
