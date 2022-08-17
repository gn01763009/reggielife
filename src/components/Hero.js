import React from "react"
import { Link } from "gatsby"
import Typed from "react-typed"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "reggieRealPic.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Reggie</h1>
            <div className="typing">
              <Typed
                strings={[
                  "Software Engineer",
                  "&#128679; Updating....",
                  " &#128556; &#128556;",
                ]}
                typeSpeed={87}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </div>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
