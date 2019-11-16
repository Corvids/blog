import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/snippet.css"

const SingleSnippet = (snippet_title, link_to, desc) => (
    <Layout ClassName="">
        <SEO title={snippet_title} />
        <p>{desc}</p>
        <Link to={link_to} className="link-to-home">View Code</Link>
    </Layout>
)

export default SingleSnippet
