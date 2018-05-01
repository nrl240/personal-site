import React from 'react'
import Link from 'gatsby-link'
import { Footer, Icon } from 'bloomer'

import gmail from '../../img/gmail.svg'
import linkedin from '../../img/linkedin.svg'
import github from '../../img/github.svg'
import faviconBlock from '../../img/faviconBlock.png'

const AppFooter = () => (
  <Footer id="footer" style={styles.footer}>
    <div style={styles.imgsContainer}>
      <a href="mailto:nrlaureano@gmail.com" target="_blank">
        <img src={gmail} style={styles.img} />
      </a>
      <a href="https://www.linkedin.com/in/noellelaureano/" target="_blank">
        <img src={linkedin} style={styles.img} />
      </a>
      <a href="https://github.com/nrl240" target="_blank">
        <img src={github} style={styles.img} />
      </a>
      <Link to="/">
        <img src={faviconBlock} style={styles.img} />
      </Link>
    </div>
  </Footer>
)

export default AppFooter

const styles = {
  footer: {
    padding: `0.5rem 0.5rem`,
    display: `flex`,
    justifyContent: `center`,
    backgroundColor: `#cccccc`
  },
  imgsContainer: {
    display: `flex`,
  },
  img: {
    height: `80px`,
    padding: `1rem 1rem`,
    marginBottom: `0rem`,
  },
}

// <p>
// Made with<Icon hasTextColor="danger" className="fa fa-heart" />
// by Noelle Laureano
// </p>
