import React, { useState } from 'react';
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

const LoginForm = ({ handleOpenLoginForm, handleToggleResetPasswordForm }) => {
  const [email, setEmail] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const checkValidForm = () => {
    if (email.length > 0) {
      setWarning(false);
      setWarningMessage('');
      return true;
    } else {
      setWarning(true);
      setWarningMessage('All fields must be filled');
      return false;
    }
  }

  const handleSubmitResetPassword = (e) => {
    e.preventDefault();
    if (checkValidForm()) {
      console.log(email)
    }
  }

  return (
    <>
      <Background onClick={() => handleToggleResetPasswordForm()} />
      <FormDiv>
        <Heading>| Reset Password</Heading>
        <Form onSubmit={(e) => handleSubmitResetPassword(e)}>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            value={email}
            onChange={(e) => onChangeEmail(e)}
          />
          <Submit type='submit'>Reset Password</Submit>
          {warning && warningMessage.length > 0 && (
            <Warning>{warningMessage}</Warning>
          )}
          <Button type='button' onClick={() => handleOpenLoginForm()}>Already have an account?</Button>
        </Form>
      </FormDiv>
    </>
  )
}

LoginForm.propTypes = {
  handleOpenLoginForm: PropTypes.func.isRequired,
  handleOpenRegisterForm: PropTypes.func.isRequired,
  handleOpenResetPasswordForm: PropTypes.func.isRequired,
}

export default LoginForm;
