import React from 'react';
import PropTypes from 'prop-types';

import DateFormatter from '../../../../utils/dateFormatter';

import {
  LinkDiv,
  Wrapper,
  CreateAt,
  LinkNewUrl,
  LinkOldUrl,
  A
} from '../../../../styles/components/UI/Lists/RecentlyCreatedLinksList/RecentlyCreatedLinksList';

const RecentlyCreatedLinksList = ({ links }) => {
  const dateFormatter = new DateFormatter();

  return (
    <Wrapper>
      {links.map((link) => (
        <A href={`${process.env.REACT_APP_FRONT_END_API}/${link.uniqueId}`} target='_blank' rel='noopener noreferrer'>
          <LinkDiv>
            <CreateAt>{dateFormatter.formatDateFullDate(link.createdAt)}</CreateAt>
            <LinkNewUrl>{`${process.env.REACT_APP_FRONT_END_API}/${link.uniqueId}`}</LinkNewUrl>
            <LinkOldUrl>{link.originalURL}</LinkOldUrl>
          </LinkDiv>
        </A>
      ))}
    </Wrapper>
  );
}


RecentlyCreatedLinksList.propTypes = {
  links: PropTypes.array.isRequired,
}

export default RecentlyCreatedLinksList;
