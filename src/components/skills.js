import React from "react"
import Title from "./Title"
import Skill from "../constants/skill"
const skills = () => {
  return (
    <section className="section bg-grey">
      <Title title="Skills" />
      <div className="section-center skills-center">
        {Skill.map(skill => {
          const { id, icon, title, text } = skill
          return (
            <article key={id} className="skill">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default skills
