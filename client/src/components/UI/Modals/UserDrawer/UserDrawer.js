import React from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Background,
  DrawerDiv,
  List,
  ListItem,
  LogoutButton
} from '../../../../styles/components/UI/Modals/UserDrawer/UserDrawer';

import { logoutUser } from '../../../../store/actions/user/user';
import { clearLink } from '../../../../store/actions/link/link';
import { clearLinks } from '../../../../store/actions/links/links';


const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user
  }
}

const UserDrawer = ({ openUserModal, openUserDrawer, handleToggleUserModalForm, user }) => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    dispatch(clearLink());
    dispatch(clearLinks());
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
            {!_.isEmpty(user.data) && !user.loading && !user.error && user.fetched && (
              <LogoutButton onClick={() => handleLogoutUser()} >Log out</LogoutButton>
            )}
          </DrawerDiv>
        </>
      )}
    </>
  )
}

UserDrawer.propTypes = {
  openUserModal: PropTypes.bool.isRequired,
  openUserDrawer: PropTypes.bool.isRequired,
  handleToggleUserModalForm: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired
}

export default connect(mapStateToProps)(UserDrawer);
