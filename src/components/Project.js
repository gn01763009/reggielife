import React from "react"
// import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"

const Project = ({ descript, title, url, stack, image }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">
          {descript.map(item => {
            return <li className="project-desc-div">{item.exp_descript}</li>
          })}
        </p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <a href={url}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </article>
  )
}

export default Project
