import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import Hero from '../../components/UI/Home/Hero/Hero';
import ShortenerForm from '../../components/UI/Home/ShortenerForm/ShortenerForm';
import Description from '../../components/UI/Home/Description/Description';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home - Linky</title>
      </Helmet>
      <Hero />
      <ShortenerForm />
      <Description />
    </Layout>
  )
}

export default Home;
