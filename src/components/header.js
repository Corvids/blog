import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../style/header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f9f9f9`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/page-2/">About</Link>
      <Link to="/page-2/">Blog</Link>
      <Link to="/page-2/">Portfolio</Link>
      <Link to="/page-2/">Code Snippets</Link>
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#5d5d5d`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
