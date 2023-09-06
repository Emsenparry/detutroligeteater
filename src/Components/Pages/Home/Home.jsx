import React from 'react'
import HeroImage from '../../Partials/HeroImage/HeroImage'
import HomeEvents from './HomeEvents/HomeEvents'
import { Layout } from '../../Layout/Layout'

const Home = () => {
  return (
    <Layout title="Forside">
      <HeroImage />
      <HomeEvents />
    </Layout>
  )
}

export default Home