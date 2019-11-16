import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="About" />
    <p>Welcome to the blog</p>
    <Link to="/" className="link-to-home">Go back to the homepage</Link>
  </Layout>
)

export default Blog
