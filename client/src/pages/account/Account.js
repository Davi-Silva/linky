import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import _ from 'lodash';
import Helmet from 'react-helmet';

import DateFormatter from '../../utils/dateFormatter';

import {
  Wrapper,
  MyAccountListContainer,
  MyAccount,
  UserName,
  Date
} from '../../styles/pages/account/Account';

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user
  }
}

const Account = ({ user }) => {
  const [linksLength, setLinksLength] = useState(0);

  const dataeFormatter = new DateFormatter();

  const fetchGetNumberOfLinks = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACK_END_API}/links/length?userId=${user.data._id}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    if (data.status_code === 200) {
      setLinksLength(data.results)
    }

  }

  useEffect(() => {
    if (!_.isEmpty(user.data) && !user.loading && !user.error && user.fetched) {
      fetchGetNumberOfLinks();
    }
  }, [user]);


  return (
    <Layout>
      <Helmet>
        <title>My Account - Linky</title>
      </Helmet>
      <Wrapper className='containerWidth'>
        {!_.isEmpty(user.data) && !user.loading && !user.error && user.fetched && (
          <MyAccountListContainer>
            <div>
              <MyAccount>My Account</MyAccount>
              <UserName>{`${user.data.names.firstName} ${user.data.names.lastName}`}</UserName>
              <Date>Since {dataeFormatter.formatDateFullDate(user.data.createdAt)}</Date>
            </div>
            <div>
              <p>You have <strong>{linksLength}</strong> shortened link{linksLength === 1 ? '' : 's'}.</p>
            </div>
          </MyAccountListContainer>
        )}
      </Wrapper>
    </Layout>
  )
}

export default connect(mapStateToProps)(Account);
