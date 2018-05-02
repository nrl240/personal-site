import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.module.css'
// import { Icon } from 'bloomer'
// import Container from './container'

import { faviconBlock, gmail, linkedin, github } from '../img/footer'

import { Footer, Icon } from 'bloomer'

const AppFooter = () => (
  <Footer className={styles.footer}>
    <div className={styles.imgsContainer}>
      <a href="mailto:nrlaureano@gmail.com" target="_blank">
        <img src={gmail} className={styles.iconImg} />
      </a>
      <a href="https://www.linkedin.com/in/noellelaureano/" target="_blank">
        <img src={linkedin} className={styles.iconImg} />
      </a>
      <a href="https://github.com/nrl240" target="_blank">
        <img src={github} className={styles.iconImg} />
      </a>
      <Link to="/">
        <img src={faviconBlock} className={styles.iconImg} />
      </Link>
    </div>
  </Footer>
)

export default AppFooter

// <p>
// Made with<Icon hasTextColor="danger" className="fa fa-heart" />
// by Noelle Laureano
// </p>
