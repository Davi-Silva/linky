import React, { useState } from 'react';

import {
  Brand,
  Container,
  Login,
  Navbar
} from '../../../styles/components/UI/Navbar/Navbar';

import LoginForm from '../Modals/LoginForm/LoginForm';
import RegisterForm from '../Modals/RegisterForm/RegisterForm';
import ResetPasswordForm from '../Modals/ResetPasswordForm/ResetPasswordForm';

const NavigationBar = () => {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);

  const handleToggleLoginForm = () => {
    setOpenLoginForm(!openLoginForm);
  }

  const handleToggleRegisterForm = () => {
    setOpenRegisterForm(!openRegisterForm);
  }

  const handleToggleResetPasswordForm = () => {
    setOpenResetPassword(!openResetPassword);
  }

  const handleOpenLoginForm = () => {
    setOpenLoginForm(true);
    setOpenRegisterForm(false);
    setOpenResetPassword(false);
  }

  const handleOpenRegisterForm = () => {
    setOpenLoginForm(false);
    setOpenRegisterForm(true);
    setOpenResetPassword(false);
  }

  const handleOpenResetPasswordForm = () => {
    setOpenLoginForm(false);
    setOpenRegisterForm(false);
    setOpenResetPassword(true);
  }

  return (
    <>
      {openLoginForm && (
        <LoginForm
          handleToggleLoginForm={handleToggleLoginForm}
          handleOpenRegisterForm={handleOpenRegisterForm}
          handleOpenResetPasswordForm={handleOpenResetPasswordForm}
        />
      )}
      {openRegisterForm && (
        <RegisterForm
          handleOpenLoginForm={handleOpenLoginForm}
          handleOpenResetPasswordForm={handleOpenResetPasswordForm}
          handleToggleRegisterForm={handleToggleRegisterForm}
        />
      )}
      {openResetPassword && (
        <ResetPasswordForm
          handleOpenLoginForm={handleOpenLoginForm}
          handleToggleResetPasswordForm={handleToggleResetPasswordForm}
        />
      )}
      <Navbar>
        <Container>
          <div>
            <Brand>Link</Brand>
          </div>
          <div>
            <Login onClick={() => handleToggleLoginForm()}>Login</Login>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
