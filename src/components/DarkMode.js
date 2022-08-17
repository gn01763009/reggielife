import React from "react"
import { darkTheme, lightTheme } from "./DarkTheme"
export const DarkMode = () => {
  const [theme, setTheme] = React.useState("dark")
  if (typeof window !== "undefined") {
    localStorage.getItem("dark") ? darkTheme(theme) : lightTheme(theme)
  } else {
    let localStorage = { theme: "light" }
  }

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
    if (theme === "dark") {
      localStorage.setItem("theme", darkTheme(theme))
    } else {
      localStorage.setItem("theme", lightTheme(theme))
    }
  }
  return (
    <div className="topnav-info">
      <div>Display</div>
      <label className="topnav-theme">
        <input onChange={toggleTheme} className="helloworld" type="checkbox" />
        <span
          className={`check ${theme === "dark" ? "dark-span" : "light-span"}`}
        />
      </label>
    </div>
  )
}

export default DarkMode
