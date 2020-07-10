import React from "react"

import SEO from "../components/seo"

const Contact = () => (
  <div>
    <SEO title="Contact" />
    <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
      <label>
        Email:{" "}
        <input type="email" name="email" />
      </label>
      <br/>
      <label>
        Name:{" "}
        <input type="text" name="name" />
      </label>
      <br/>
      <label>
        Message:{" "}
        <input type="text" name="message" />
      </label>
    </form>
  </div>
)

export default Contact
