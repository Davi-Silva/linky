import React from 'react';
import { useDispatch } from 'react-redux';

import { 
  Wrapper,
  FlexList,
  FlexListItem,
  FlexListItemButton
} from "../../../../styles/components/UI/Modals/UserModal/UserModal";

import { logoutUser } from '../../../../store/actions/user/user';
import { clearLink } from '../../../../store/actions/link/link';
import { clearLinks } from '../../../../store/actions/links/links';

const UserModal = () => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    dispatch(clearLink());
    dispatch(clearLinks());
  }

  return (
    <Wrapper>
      <FlexList>
        <FlexListItem to='/account/dashboard'>Account</FlexListItem>
        <FlexListItem to='/account/links'>My Links</FlexListItem>
        <FlexListItem to='/link/create'>Create</FlexListItem>
        <FlexListItemButton onClick={() => handleLogoutUser()} >Sign out</FlexListItemButton>
      </FlexList>
    </Wrapper>
  )
}

export default UserModal
