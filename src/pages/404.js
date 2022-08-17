import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Typed from "react-typed"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="eeror-container">
          <h1>
            <Typed
              strings={["oops....", "Nothing here, sorry"]}
              typeSpeed={200}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
