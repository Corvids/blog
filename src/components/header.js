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
    <div className="header">
      <Link to="/" className="title">
        <h1>
          <span style={{color:"#ffb3ba"}}>J</span>
          <span style={{color:"#ffdfba"}}>E</span>
          <span style={{color:"#fdfd96"}}>N</span>
          <span style={{color:"#baffc9"}}>N</span>
          <span style={{color:"#bae1ff"}}>I</span>
          <span style={{color:"#f2e2ff"}}>F</span>
          <span style={{color:"#e2eeff"}}>E</span>
          <span style={{color:"#ffdef2"}}>R</span>
        </h1>
      </Link>
      <div className="nav-links-full">
        <Link to="/page-2/" className="nav-link-individual">About</Link>
        <Link to="/page-2/" className="nav-link-individual">Blog</Link>
        <Link to="/page-2/" className="nav-link-individual">Portfolio</Link>
        <Link to="/page-2/" className="nav-link-individual">Code Snippets</Link>
      </div>
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
