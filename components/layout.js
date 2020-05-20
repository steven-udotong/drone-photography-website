import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Steve's Investing Site</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/whyinvest/">Why Invest?</ListLink>
          <ListLink to="/resources/">Resources</ListLink>
          <ListLink to="/platforms/">Platforms</ListLink>
          <ListLink to="/about/">About Me</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}