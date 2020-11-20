import React, { useState, useEffect, useLayoutEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';

import {
  Brand,
  Container,
  Login,
  UserButton,
  Navbar
} from '../../../styles/components/UI/Navbar/Navbar';

import LoginForm from '../Modals/LoginForm/LoginForm';
import RegisterForm from '../Modals/RegisterForm/RegisterForm';
import ResetPasswordForm from '../Modals/ResetPasswordForm/ResetPasswordForm';
import UserModal from '../Modals/UserModal/UserModal';
import UserDrawer from '../Modals/UserDrawer/UserDrawer';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user
  }
}

const NavigationBar = ({ user }) => {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openUserDrawer, setOpenUserDrawer] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (openUserModal) {
      setOpenUserDrawer(openUserModal);
    } else {
      setTimeout(() => {
        setOpenUserDrawer(openUserModal);
      }, 250);
    }
  }, [openUserModal]);

  useEffect(() => {
    if (width <= 880) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  useEffect(() => {
    if (!_.isEmpty(user.data)) {
      closeAllForms();
    }
  }, [user]);

  const handleToggleLoginForm = () => {
    setOpenLoginForm(!openLoginForm);
  }

  const handleToggleRegisterForm = () => {
    setOpenRegisterForm(!openRegisterForm);
  }

  const handleToggleResetPasswordForm = () => {
    setOpenResetPassword(!openResetPassword);
  }

  const handleToggleUserModalForm = () => {
    setOpenUserModal(!openUserModal);
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

  const closeAllForms = () => {
    setOpenLoginForm(false);
    setOpenRegisterForm(false);
    setOpenResetPassword(false);
    setOpenUserModal(false);
  }

  return (
    <>
      {_.isEmpty(user.data) && (
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
        </>
      )}
      <Navbar>
        <Container>
          <div>
            <Brand to='/'>Link</Brand>
          </div>
          <div>
            <>
              {!_.isEmpty(user.data) && !user.loading && !user.error && user.fetched ? (
                <UserButton
                  onClick={() => handleToggleUserModalForm()}
                >{`${user.data.names.firstName} ${user.data.names.lastName}`}</UserButton>
              ) : (
                <Login
                  onClick={() => handleToggleLoginForm()}
                >Login</Login>
              )}
              {!_.isEmpty(user.data) && !isMobile && openUserModal && <UserModal />}
              {isMobile && <UserDrawer
                openUserModal={openUserModal}
                openUserDrawer={openUserDrawer}
                handleToggleUserModalForm={handleToggleUserModalForm}
              />}
            </>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default connect(mapStateToProps)(NavigationBar);
