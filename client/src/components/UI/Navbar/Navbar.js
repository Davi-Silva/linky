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

import {
  getDimensions, setIsMobile
} from '../../../store/actions/app/app';
import {
  closeLoginForm,
  closeRegisterForm,
  closeResetPasswordForm,
  closeUserDrawer,
  closeUserModal,
  openLoginForm,
  openRegisterForm,
  openResetPasswordForm,
  openUserDrawer,
  toggleLoginForm,
  toggleRegisterForm,
  toggleResetPasswordForm,
  toggleUserModal
} from '../../../store/actions/navbar/navbar'

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
  const { user, app, navbar } = state;

  return {
    user,
    app,
    navbar
  }
}

const NavigationBar = ({ user, app, navbar }) => {
  const dispatch = useDispatch();

  dispatch(getDimensions(useWindowSize()));

  useEffect(() => {
    if (navbar.openUserModal) {
      dispatch(openUserDrawer())
    } else {
      setTimeout(() => {
        dispatch(closeUserDrawer())
      }, 250);
    }
  }, [navbar.openUserModal]);

  useEffect(() => {
    if (app.dimensions[0] <= 670) {
      dispatch(setIsMobile(true));
    } else {
      dispatch(setIsMobile(false));
    }
  }, [app.dimensions])

  useEffect(() => {
    if (!_.isEmpty(user.data)) {
      closeAllForms();
    }
  }, [user]);

  const handleToggleLoginForm = () => {
    dispatch(toggleLoginForm(navbar.openLoginForm));
  }

  const handleToggleRegisterForm = () => {
    dispatch(toggleRegisterForm(navbar.openRegisterForm));
  }

  const handleToggleResetPasswordForm = () => {
    console.log('navbar.openResetPasswordForm:', navbar.openResetPasswordForm)
    dispatch(toggleResetPasswordForm(navbar.openResetPasswordForm))
  }

  const handleToggleUserModalForm = () => {
    dispatch(toggleUserModal(navbar.openUserModal))
  }

  const handleOpenLoginForm = () => {
    dispatch(openLoginForm());
    dispatch(closeRegisterForm());
    dispatch(closeResetPasswordForm())
  }

  const handleOpenRegisterForm = () => {
    dispatch(closeLoginForm());
    dispatch(openRegisterForm());
    dispatch(closeResetPasswordForm())
  }

  const handleOpenResetPasswordForm = () => {
    dispatch(closeLoginForm());
    dispatch(closeRegisterForm());
    dispatch(openResetPasswordForm())
  }

  const closeAllForms = () => {
    dispatch(closeLoginForm());
    dispatch(closeRegisterForm());
    dispatch(closeResetPasswordForm())
    dispatch(closeUserModal())
  }

  return (
    <>
      {_.isEmpty(user.data) && (
        <>
          {navbar.openLoginForm && (
            <LoginForm
              handleToggleLoginForm={handleToggleLoginForm}
              handleOpenRegisterForm={handleOpenRegisterForm}
              handleOpenResetPasswordForm={handleOpenResetPasswordForm}
            />
          )}
          {navbar.openRegisterForm && (
            <RegisterForm
              handleOpenLoginForm={handleOpenLoginForm}
              handleOpenResetPasswordForm={handleOpenResetPasswordForm}
              handleToggleRegisterForm={handleToggleRegisterForm}
            />
          )}
          {navbar.openResetPasswordForm && (
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
              {!_.isEmpty(user.data) && !app.isMobile && navbar.openUserModal && <UserModal />}
              {app.isMobile && <UserDrawer
                openUserModal={navbar.openUserModal}
                openUserDrawer={navbar.openUserDrawer}
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
