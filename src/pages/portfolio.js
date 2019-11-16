import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="About" />
    <p>Welcome to the portfolio</p>
    <Link to="/" ClassName="link-to-home">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
