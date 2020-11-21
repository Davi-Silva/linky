import React from 'react';
import Helmet from 'react-helmet';

import DevFocus from '../../assets/img/dev_focus.svg';

import Layout from '../../components/Layout';
import Hero from '../../components/UI/Home/Hero/Hero';
import ShortenerForm from '../../components/UI/Home/ShortenerForm/ShortenerForm';
import Description from '../../components/UI/Home/Description/Description';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home - Linky</title>
        <meta name='description' content='Shrink your path to your destination.' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Home - Linky'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.REACT_APP_FRONT_END_API}`}
        />
        <meta
          property='og:description'
          content='Shrink your path to your destination.'
        />
        <meta
          property='og:image'
          content={DevFocus}
        />
        <meta property='og:site_name' content='Linky' />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@link' />
        <meta name='twitter:title' content='Home - Linky' />
        <meta
          name='twitter:description'
          content='Shrink your path to your destination.'
        />
        <meta name='twitter:creator' content='@linky' />
        <meta
          name='twitter:image'
          content={DevFocus}
        />
      </Helmet>
      <Hero />
      <ShortenerForm />
      <Description />
    </Layout>
  )
}

export default Home;
