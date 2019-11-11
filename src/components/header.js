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
          <span style={{color:"#cec1e7"}}>N</span>
          <span style={{color:"#baffc9"}}>N</span>
          <span style={{color:"#bae1ff"}}>I</span>
          <span style={{color:"#f2e2ff"}}>F</span>
          <span style={{color:"#e2eeff"}}>E</span>
          <span style={{color:"#ffdef2"}}>R</span>
        </h1>
      </Link>
      <div className="nav-links-full">
        <Link to="/about/" className="nav-link-individual">About</Link>
        <Link to="/blog/" className="nav-link-individual">Blog</Link>
        <Link to="/portfolio/" className="nav-link-individual">Portfolio</Link>
        <Link to="/code-snippets/" className="nav-link-individual">Code Snippets</Link>
      </div>
      <div className="nav-links-social">
        <a href="https://github.com/corvids" target="_blank"><div class="icons8-github"></div></a>
        <a href="https://www.linkedin.com/in/jennifer-joo/" target="_blank"><div class="icons8-linkedin"></div></a>
        <a href="mailto:me@jenniferjoo.com" target="_blank"><div class="icons8-email"></div></a>
        <a href="https://twitter.com/joonnifer/" target="_blank"><div class="icons8-twitter"></div></a>
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
