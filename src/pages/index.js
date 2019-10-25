import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/footer.css"

const IndexPage = ({description}) => (
  <Layout>
    <SEO title="Home" />
    <h2>Hello there! <span class="rainbow-letters">I'm Jennifer</span></h2>
    <p>Welcome to my personal website.</p>
    <p>This is a place where I'll store my blog post, personal projects, code snippets, etc.!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
