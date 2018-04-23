import React from 'react'
import Link from 'gatsby-link'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const AppHeader = ({children}) => (
  <header style={styles.header}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>Noelle Laureano</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none` }}>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
)

export default AppHeader

const styles = {
  site: {
    marginBottom: `rhythm(1)`,
    margin: `0 auto`,
    maxWidth: 650,
    padding: `1.25rem 1rem`,
  },
  header: {
    marginBottom: `1.5rem`,
  },
}
