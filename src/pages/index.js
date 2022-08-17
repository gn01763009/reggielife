import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Skills from "../components/skills"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import TopNavbar from "../components/TopNavbar"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <React.Fragment>
      <Layout>
        <TopNavbar />
        <Hero />
        <Jobs />
        <Projects projects={projects} title="featured projects" showLink />
        <Skills />
      </Layout>
    </React.Fragment>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        descript {
          exp_descript
        }
        id
        url
        title
        strapiId
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
