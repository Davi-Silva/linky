import React from 'react';
import PropTypes from 'prop-types';

import {
  LinkDiv,
  Wrapper,
  LinkNewUrl,
  LinkOldUrl,
  A
} from '../../../../styles/components/UI/Lists/RecentlyCreatedLinksList/RecentlyCreatedLinksList';

const RecentlyCreatedLinksList = ({links}) => (
  <Wrapper>
    {links.map((link) => (
      <A href={link.originalURL} target='_blank' rel='noopener noreferrer'>
        <LinkDiv>
          <LinkNewUrl>{`${process.env.REACT_APP_FRONT_END_API}/l/${link._id}`}</LinkNewUrl>
          <LinkOldUrl>{link.originalURL}</LinkOldUrl>
        </LinkDiv>
      </A>
    ))}
  </Wrapper>
)


RecentlyCreatedLinksList.propTypes = {
  links: PropTypes.array.isRequired,
}

export default RecentlyCreatedLinksList;
