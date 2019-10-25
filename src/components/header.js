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
