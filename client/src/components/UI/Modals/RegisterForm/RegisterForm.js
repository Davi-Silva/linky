import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Background,
  FormDiv,
  Heading,
  Form,
  SplitDiv,
  Input,
  Label,
  Submit,
  Warning,
  Button
} from '../../../../styles/components/UI/Modals/LoginForm/LoginForm';

const RegisterForm = ({ handleOpenLoginForm, handleOpenResetPasswordForm, handleToggleRegisterForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState([]);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  }

  const checkValidForm = () => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      password2.length > 0) {
      setWarning(false);
      setWarningMessage('');
      return true;
    } else {
      setWarning(true);
      setWarningMessage('All fields must be filled');
      return false;
    }
  }

  const passwordMustMatch = () => {
    if (password === password2) {
      setWarning(false);
      setWarningMessage('');
      return true;
    } else {
      setWarning(true);
      setWarningMessage('Both passwords must match')
      return false;
    }
  }

  const registerUser = async (userObj) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACK_END_API}/users/register`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj)
      }
    );
    const data = await res.json();
    return data;
  }
  

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setWarning(false);
    setWarningMessage('');
    if (checkValidForm() && passwordMustMatch()) {
      const createUserResponse = await registerUser({
        names: {
          firstName,
          lastName
        },
        username,
        email,
        password,
        password2
      });

      if (createUserResponse.status_code === 400) {
        setWarning(true);
        setWarningMessage(createUserResponse.errors[0]);
      }

      if (createUserResponse.status_code === 201) {
        handleOpenLoginForm();
      }

    }
  }

  return (
    <>
      <Background onClick={() => handleToggleRegisterForm()} />
      <FormDiv>
        <Heading>| Register</Heading>
        <Form onSubmit={(e) => handleSubmitRegister(e)}>
          <SplitDiv>
            <div>
            <Label htmlFor='firstName'>First Name</Label>
            <Input
              id='firstName'
              type='text'
              value={firstName}
              onChange={(e) => onChangeFirstName(e)}
            />
            </div>
            <div>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input
                id='lastName'
                type='text'
                value={lastName}
                onChange={(e) => onChangeLastName(e)}
              />
            </div>
          </SplitDiv>
          <Label htmlFor='username'>Username</Label>
          <Input
            id='username'
            type='text'
            value={username}
            onChange={(e) => onChangeUsername(e)}
          />
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
          <Label htmlFor='password2'>Confirm Password</Label>
          <Input
            id='password2'
            type='password'
            value={password2}
            onChange={(e) => onChangePassword2(e)}
          />
          <Submit type='submit'>Login</Submit>
          {warning && warningMessage.length > 0 && <Warning>{warningMessage}</Warning>}
          <Button type='button' onClick={() => handleOpenResetPasswordForm()}>Reset Password</Button>
          <Button type='button' onClick={() => handleOpenLoginForm()}>Already have an account?</Button>
        </Form>
      </FormDiv>
    </>
  )
}

RegisterForm.propTypes = {
  handleOpenLoginForm: PropTypes.func.isRequired,
  handleOpenResetPasswordForm: PropTypes.func.isRequired,
  handleToggleRegisterForm: PropTypes.func.isRequired,
}

export default RegisterForm;
