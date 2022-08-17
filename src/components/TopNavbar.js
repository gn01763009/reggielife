import React from "react"
import DarkMode from "./DarkMode"
import { FaLink } from "react-icons/fa"
const TopNavbar = () => {
  return (
    <nav className="topnavbar">
      <div className="topnav-center">
        <a
          href="https://github.com/gn01763009/WEB"
          className="topnav-link"
          target="_blank"
          rel="noreferrer"
        >
          Github
          <FaLink></FaLink>
        </a>
        <DarkMode />
      </div>
    </nav>
  )
}

export default TopNavbar
