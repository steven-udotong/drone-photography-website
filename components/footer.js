import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <p>© 2020, Built with Gatsby</p>
      <Link to="/privacy">Privacy Page</Link>
      <Link to="/imprint">Imprint Page</Link>
    </footer>
  )
}

export default Footer