import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';

import Layout from '../../../components/Layout';
import RecentlyCreatedLinksList from '../../../components/UI/Lists/RecentlyCreatedLinksList/RecentlyCreatedLinksList';

import {
  Wrapper,
  H1
} from '../../../styles/pages/account/links/Links';

import {
  getLinks
} from '../../../store/actions/links/links';

const mapStateToProps = (state) => {
  const { links, user } = state;

  return {
    links,
    user
  }
}

const Links = ({ links, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!_.isEmpty(user.data) && !user.loading && !user.error && user.fetched) {
      dispatch(getLinks(user.data._id))
    }
  }, [user]);

  return (
    <Layout>
      <Wrapper>
        <H1>My Links</H1>
        {!_.isEmpty(links.data) && !links.loading && !links.error && links.fetched && (
          <RecentlyCreatedLinksList links={links.data} />
        )}
      </Wrapper>
    </Layout>
  )
}

export default connect(mapStateToProps)(Links);
