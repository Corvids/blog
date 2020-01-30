/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "../style/footer.css"

const Footer = () => {
  return (
    <div className="footer-content">
        <footer>
          © {new Date().getFullYear()}, built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsby</a>
        </footer>
    </div>
  )
}

export default Footer
