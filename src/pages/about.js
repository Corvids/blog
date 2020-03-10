import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    {/*TODO: Add a photo of self here*/}
    <SEO title="About" />
    <p><b>Hello there! My name is Jennifer</b> and I'm based in Seattle <span role="img" aria-label="Sunrise Over Mountains emoji">🌄</span>.</p>
    <br/>
    <p>I'm currently a sofware engineer <span role="img" aria-label="Woman Technologist emoji">👩‍💻</span> at Microsoft.
      I'm interested in functional programming, developer productivity,
      and working on my side projects <span role="img" aria-label="Woman Juggling emoji">🤹‍♀️</span>.</p>
    <br/>
    <p>In a past life, I was a data analyst in Chicago
      and I helped non-profit organizations
      to further their mission through the use of data <span role="img" aria-label="Bar Chart emoji">📊</span>.</p>
    <br/>
    <p><b>When I'm not coding</b>, I like going to various fitness classes <span role="img" aria-label="Woman in Lotus Position emoji">🧘‍♀️</span>,
    visiting farmers' markets <span role="img" aria-label="Woman Farmer emoji">👩‍🌾</span>, or attending a musical show <span role="img" aria-label="Violin emoji">🎻</span>.</p>
    <br/>
    <Link to="/" className="link-to-home">Go back to the homepage</Link>
  </Layout>
)

export default About
