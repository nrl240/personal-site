import React from 'react'
import Link from 'gatsby-link'
import gmail from '../img/gmail.svg'
import email from '../img/email.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={styles.site}>
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
    {children()}
    <footer style={styles.footer}>
      <div style={styles.imgsContainer}>
        <a href="mailto:nrlaureano@gmail.com" target="_blank">
          <img src={gmail} style={styles.imgs} />
        </a>
        <a href="https://www.linkedin.com/in/noellelaureano/" target="_blank">
          <img src={linkedin} style={styles.imgs} />
        </a>
        <a href="https://github.com/nrl240" target="_blank">
          <img src={github} style={styles.imgs} />
        </a>
      </div>
      <div style={{fontSize: `12px`, textAlign: `center`}}>
        <span>Icon made by [author link] from www.flaticon.com</span>
      </div>
    </footer>
  </div>
)

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
  footer: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    marginTop: `1.5rem`,
    height: `5rem`,
  },
  imgsContainer: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`
  },
  imgs: {
    height: `2.25rem`,
    padding: `0rem 1rem`,
    marginBottom: `0rem`
  },
}
