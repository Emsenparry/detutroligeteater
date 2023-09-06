import React from 'react'
import { Layout } from '../../Layout/Layout'
import EventList from './EventList/EventList'
import HeroImage from '../../Partials/HeroImage/HeroImage'

const Events = () => {
  return (
    <Layout title="Forestillinger & events">
        <HeroImage />
        <EventList />

    </Layout>
  )
}

export default Events