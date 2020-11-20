import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Background,
  DrawerDiv,
  List,
  ListItem,
  LogoutButton
} from '../../../../styles/components/UI/Modals/UserDrawer/UserDrawer';

import { logoutUser } from '../../../../store/actions/user/user';

const UserDrawer = ({ openUserModal, openUserDrawer, handleToggleUserModalForm }) => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      {openUserDrawer && (
        <>
          <Background onClick={() => handleToggleUserModalForm()}/>
          <DrawerDiv openUserModal={openUserModal}>
            <List>
              <ListItem 
                to='/account/dashboard'
                onClick={() => handleToggleUserModalForm()}
              >
                Account
              </ListItem>
              <ListItem 
                to='/account/links'
                onClick={() => handleToggleUserModalForm()}
              >
                My Links
              </ListItem>
              <ListItem 
                to='/links/create'
                onClick={() => handleToggleUserModalForm()}
              >
                Create
              </ListItem>
            </List>
            <LogoutButton onClick={() => handleLogoutUser()} >Log out</LogoutButton>
          </DrawerDiv>
        </>
      )}
    </>
  )
}

UserDrawer.propTypes = {
  openUserModal: PropTypes.bool.isRequired,
  openUserDrawer: PropTypes.bool.isRequired,
  handleToggleUserModalForm: PropTypes.func.isRequired
}

export default UserDrawer
