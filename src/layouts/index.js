// import React from 'react'
// import Link from 'gatsby-link'

import React from 'react'
import PropTypes from 'prop-types'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
} from 'bloomer'

import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Hero isFullHeight isColor="primary">
      <AppHeader />
      <HeroBody>{children()}</HeroBody>
    </Hero>
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

// <Hero isFullHeight isColor="primary">
// <AppHeader />
// <HeroBody>{children()}</HeroBody>
// </Hero>

// export default ({ children }) => (
//   <div style={styles.site}>
//     <header style={styles.header}>
//       <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//         <h3 style={{ display: `inline` }}>Noelle Laureano</h3>
//       </Link>
//       <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none` }}>
//         <ListLink to="/about/">About</ListLink>
//         <ListLink to="/projects/">Projects</ListLink>
//         <ListLink to="/contact/">Contact</ListLink>
//       </ul>
//     </header>
//     {children()}
//     <footer style={styles.footer}>
//       <div style={styles.imgsContainer}>
//         <a href="mailto:nrlaureano@gmail.com" target="_blank">
//           <img src={gmail} style={styles.imgs} />
//         </a>
//         <a href="https://www.linkedin.com/in/noellelaureano/" target="_blank">
//           <img src={linkedin} style={styles.imgs} />
//         </a>
//         <a href="https://github.com/nrl240" target="_blank">
//           <img src={github} style={styles.imgs} />
//         </a>
//       </div>
//       <div style={{ fontSize: `11px`, textAlign: `center` }}>
//         <span>Icons from www.flaticon.com</span>
//       </div>
//     </footer>
//   </div>
// )

const styles = {
  site: {
    marginBottom: `rhythm(1)`,
    margin: `0 auto`,
    maxWidth: 650,
    padding: `1.25rem 1rem`,
  },
}
