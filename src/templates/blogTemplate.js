import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  const title = frontmatter.title;
	const date = frontmatter.date;
	const html = markdownRemark.html;
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h2>{title}</h2>
          <div>
            <em>Originally published on: {date}</em>
          </div>
          <br />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
      }
    }
  }
`