import React from 'react';

import Layout from '../../components/Layout';
import Hero from '../../components/UI/Home/Hero/Hero';
import ShortenerForm from '../../components/UI/Home/ShortenerForm/ShortenerForm';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ShortenerForm />
    </Layout>
  )
}

export default Home;
