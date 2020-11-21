import React from 'react';

import Layout from '../../components/Layout';
import Hero from '../../components/UI/Home/Hero/Hero';
import ShortenerForm from '../../components/UI/Home/ShortenerForm/ShortenerForm';
import Description from '../../components/UI/Home/Description/Description';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ShortenerForm />
      <Description />
    </Layout>
  )
}

export default Home;
