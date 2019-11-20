import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Header title="Heyo!" />
    <nav>
      <Link to="/about">About page</Link>
      <Link to="/contact">Contact page</Link>
    </nav>
    <p>some subtitle</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
