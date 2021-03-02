import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Resume from '../components/resume'

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <Hero />
        <Resume />
    </Layout>
)

export default IndexPage
