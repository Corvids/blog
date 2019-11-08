import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeSnippets = () => (
  <Layout>
    <SEO title="code snippets" />
    <h1>Hi from the code snippets page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CodeSnippets
