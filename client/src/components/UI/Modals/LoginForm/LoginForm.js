import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Background,
  FormDiv,
  Heading,
  Form,
  Input,
  Label,
  Submit,
  Warning,
  Button
} from '../../../../styles/components/UI/Modals/LoginForm/LoginForm';

import { loginUser } from '../../../../store/actions/user/user';

const LoginForm = ({ handleToggleLoginForm, handleOpenRegisterForm, handleOpenResetPasswordForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const dispatch = useDispatch();

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
  

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setWarning(false);
    setWarningMessage('');
    if (checkValidForm()) {
      dispatch(loginUser({email, password}));
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
          <Button type='button' onClick={() => handleOpenResetPasswordForm()}>Reset Password</Button>
          <Button type='button' onClick={() => handleOpenRegisterForm()}>Don't have an account yet?</Button>
        </Form>
      </FormDiv>
    </>
  )
}

LoginForm.propTypes = {
  handleToggleLoginForm: PropTypes.func.isRequired,
  handleOpenRegisterForm: PropTypes.func.isRequired,
  handleOpenResetPasswordForm: PropTypes.func.isRequired,
}

export default LoginForm;
