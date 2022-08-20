import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        descript {
          exp_descript
        }
        id
        url
        title
        strapi_id
        image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
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
export default ProjectsPage
