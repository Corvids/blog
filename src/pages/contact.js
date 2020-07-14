import React from "react"

import SEO from "../components/seo"
import "../style/contact.css" 

const Contact = () => (
  <div>
    <SEO title="Contact" />
    <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
      <label>
        email:
        <br/>
        <input type="email" name="email" className="text-box"/>
      </label>
      <br/>
      <label>
        name:
        <br/>
        <input type="text" name="name" className="text-box"/>
      </label>
      <br/>
      <label>
        message:
        <br/>
        <input type="text" name="message" className="message-box" />
      </label>
    </form>
    <button type="button">Submit</button>
    <br /><br/>
  </div>
)

export default Contact
