import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/footer.css"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div></div>
      <div>
        <h2>Hello there! <span ClassName="rainbow-letters">I'm Jennifer.</span></h2>
        <p>Welcome to my personal website.</p>
        <p>This is a place where I'll store my blog post, personal projects, code snippets, etc.!</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        <Link to="/blog/" className="link-to-home">Check out my blog!</Link>
      </div>
    </Layout>
    )
  }

export default IndexPage
