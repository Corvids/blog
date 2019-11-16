import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeSnippets = () => (
  <Layout>
    <SEO title="code snippets" />
    <p>This is where you can find some of my code snippets.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CodeSnippets
