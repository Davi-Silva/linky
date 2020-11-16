import React, { useState } from 'react';

import {
  Brand,
  Container,
  Login,
  Navbar
} from '../../../styles/components/UI/Navbar/Navbar';

import LoginForm from '../Modals/LoginForm/LoginForm';

const NavigationBar = () => {
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const handleToggleLoginForm = () => {
    setOpenLoginForm(!openLoginForm);
  }

  return (
    <>
      {openLoginForm && <LoginForm handleToggleLoginForm={handleToggleLoginForm}/>}
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
