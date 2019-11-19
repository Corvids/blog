import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"

import "../style/snippet.css"

const SingleSnippet = (snippet_title, link_to, desc) => (
    <div ClassName="">
        <SEO title={snippet_title} />
        <p>{desc}</p>
        <Link to={link_to} className="link-to-home">View Code</Link>
    </div>
)

export default SingleSnippet
