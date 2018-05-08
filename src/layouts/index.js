import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

import 'font-awesome/css/font-awesome.css'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
} from 'bloomer'

import AppHeader from '../components/Header.js'
import AppFooter from '../components/Footer.js'

const TemplateWrapper = ({ children }) => (
  <div className={styles.Site}>
    <Hero isFullHeight className={styles.SiteContent}>
      <AppHeader />
      <HeroBody>
        {children()}
      </HeroBody>
    </Hero>
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
