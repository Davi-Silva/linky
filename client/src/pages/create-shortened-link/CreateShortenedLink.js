import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import sanitizeHtml from 'sanitize-html';
import getUrls from 'get-urls';
import _ from 'lodash';

import Layout from '../../components/Layout';
import RecentlyCreatedLinksList from '../../components/UI/Lists/RecentlyCreatedLinksList/RecentlyCreatedLinksList';

import {
  ShortenerDiv,
  Form,
  Input,
  Button
} from '../../styles/pages/create-shortened-link/CreateShortenedLink';

import {
  createLink,
  clearLink
} from '../../store/actions/link/link';

const mapStateToProps = (state) => {
  const { link, user } = state;

  return {
    link,
    user
  }
}

const CreateShortenedLink = ({ link, user }) => {
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
    <Layout>
      <ShortenerDiv>
        <Form onSubmit={onSubmit}>
          <Input
            type='text'
            placeholder='URL Shortener'
            onChange={onChangeURl}
            warning={warning}
          />
          <Button type='submit'>Shorten</Button>
        </Form>

        <RecentlyCreatedLinksList links={createdLinksArray} />
      </ShortenerDiv>
    </Layout>
  )
}

export default connect(mapStateToProps)(CreateShortenedLink);
