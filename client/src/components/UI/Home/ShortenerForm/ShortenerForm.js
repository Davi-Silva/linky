import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import sanitizeHtml from 'sanitize-html';
import getUrls from 'get-urls';
import _ from 'lodash';

import {
  ShortenerDiv,
  ShortenerContainer,
  RecentlyCreatedLinksListDiv,
  TitleFormDiv,
  Form,
  Input,
  ShortenerButton,
  ShortenerTitle
} from '../../../../styles/pages/home/Home';
import RecentlyCreatedLinksList from '../../../../components/UI/Lists/RecentlyCreatedLinksList/RecentlyCreatedLinksList';

import {
  createLink,
  clearLink
} from '../../../../store/actions/link/link';

const mapStateToProps = (state) => {
  const { link, user } = state;

  return {
    link,
    user
  }
}

const ShortenerForm = ({ link, user }) => {
  const [urlToShorten, setUrlToShorten] = useState('');
  const [warning, setWarning] = useState(false);

  const [createdLinksArray, setCreateLinksArray] = useState([]);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(clearLink());
  }, []);

  useEffect(() => {
    if (!_.isEmpty(link.data) && !link.error && !link.loading && link.fetched) {
      if (link.data.status_code === 200) {
        appendCreateLinkToArray();
      }
    }
  }, [link]);

  const appendCreateLinkToArray = () => {
    let tempArray = [...createdLinksArray];

    tempArray.push(link.data.results);
    setCreateLinksArray(tempArray);
  }

  const validateInput = () => {
    if (urlToShorten.length > 0) {
      setWarning(false);
      return true;
    } else {
      setWarning(true);
      return false;
    }
  }

  const sanitizsHtmlAndGetUrl = () => {
    const sanitizedUrl = sanitizeHtml(urlToShorten);
    const urlsSet = getUrls(sanitizedUrl);
    const itrUrlsSet = urlsSet.values();
    return itrUrlsSet.next().value;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      const sanitizedData = sanitizsHtmlAndGetUrl();
      if (sanitizedData === undefined) {
        setWarning(true);
      } else {
        dispatch(createLink(user.data._id, sanitizedData));
      }
    }
  }

  const onChangeURl = (e) => {
    setUrlToShorten(e.target.value);
  }


  return (
    <>
      <ShortenerDiv>
        <ShortenerContainer>
          <TitleFormDiv className='containerWidth'>
            <ShortenerTitle>Shorten your link</ShortenerTitle>
            <Form onSubmit={onSubmit}>
              <Input
                type='text'
                placeholder='URL Shortener'
                onChange={onChangeURl}
                warning={warning}
              />
              <ShortenerButton type='submit'>Shorten</ShortenerButton>
            </Form>
          </TitleFormDiv>
        </ShortenerContainer>
        <RecentlyCreatedLinksListDiv className='containerWidth'>
          <RecentlyCreatedLinksList links={createdLinksArray} />
        </RecentlyCreatedLinksListDiv>
      </ShortenerDiv>
    </>
  )
}

export default connect(mapStateToProps)(ShortenerForm);
