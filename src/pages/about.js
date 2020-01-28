import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <p><b>Hello there! My name is Jennifer</b> and I'm currently located in Seattle 🌄.</p>
    <p>I'm currently a sofware engineer 👩‍💻 at Microsoft.
      I'm interested in functional programming, developer productivity,
      and working on my side projects 🤹‍♀️.</p>
    <p>In a past life, I was a data analyst in Chicago
      and I helped non-profit organizations
      to further their mission through the use of data 📊.</p>
    <p><b>When I'm not coding</b>, I like going to various fitness classes 🧘‍♀️,
    visiting farmers' markets 👩‍🌾, or attending a musical show 🎻.</p>
    <Link to="/" className="link-to-home">Go back to the homepage</Link>
  </Layout>
)

export default About
