import React from "react"
import { Link } from "gatsby"

import SingleSnippet from "../components/single-code-snippet"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeSnippets = () => (
  <Layout>
    <SEO title="code snippets" />
    <SingleSnippet snippet_title="test" link_to="test" desc="test"/>
    <Link to="/" className="link-to-home">Go back to the homepage</Link>
  </Layout>
)

export default CodeSnippets
