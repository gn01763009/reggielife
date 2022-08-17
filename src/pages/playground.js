import React from "react"
import Layout from "../components/Layout"
// import { graphql } from "gatsby"
import Playgrounds from "../components/playgrounds"
// ...GatsbyImageSharpFluid

const PlaygroundPage = () => {
  return (
    <Layout>
      <section className="projects-page">
        <Playgrounds></Playgrounds>
      </section>
    </Layout>
  )
}

export default PlaygroundPage
