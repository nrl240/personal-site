import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'
import faviconBlock from '../faviconBlock.png'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const AppHeader = ({children}) => (
  <header>
    <Link to="/" className={styles.headerLink}>
      <h2 className={styles.headerName}>Noelle Laureano</h2>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/experience/">Experience</ListLink>
      <ListLink to="/work/">Work</ListLink>
    </ul>
  </header>
)

export default AppHeader
