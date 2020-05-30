import React from "react"
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/blog.css"

const Blog = ({data}) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="About" />
      <div className="blog-posts">
      {
        edges.map(edge => {
            const { frontmatter } = edge.node
            const tags = frontmatter.tags
            return (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path} className="link-to-home"><b>{frontmatter.title}</b></Link>
                &nbsp;
                <br/>
                <small><em>Originally published: {' '}</em>{frontmatter.date}</small>
                <p>{frontmatter.excerpt}</p>
                <small><em>Tags: {' '}</em>{ tags }</small>
              </div>
            )
          })
        }
      </div>
      <br/>
      <p>*****</p>
      <Link to="/" className="link-to-home">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						excerpt
					}
				}
			}
		}
	}
`

export default Blog
