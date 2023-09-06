import React from 'react'
import { Layout } from '../../Layout/Layout'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Layout title="Ikke fundet">
        <p>Siden du leder efter findes ikke.</p>
      <p>
        <Link to="/">Gå til forsiden</Link>
      </p>
    </Layout>
  )
}

export default NotFound