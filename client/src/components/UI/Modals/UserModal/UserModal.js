import React from 'react';
import { useDispatch } from 'react-redux';

import { 
  Wrapper,
  FlexList,
  FlexListItem,
  FlexListItemButton
} from "../../../../styles/components/UI/Modals/UserModal/UserModal";

import { logoutUser } from '../../../../store/actions/user/user';

const UserModal = () => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser())
  }

  return (
    <Wrapper>
      <FlexList>
        <FlexListItem to='/account'>Account</FlexListItem>
        <FlexListItem to='/account/links'>My Links</FlexListItem>
        <FlexListItem to='/create'>Create</FlexListItem>
        <FlexListItemButton onClick={() => handleLogoutUser()} >Sign out</FlexListItemButton>
      </FlexList>
    </Wrapper>
  )
}

export default UserModal
