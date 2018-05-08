import React from 'react'
import Link from 'gatsby-link'
import styles from './work.module.css'
import Container from '../components/container'

import {
  excelImg,
  sqlserverImg,
  vbaImg,
  bbgImg,
  apiImg,
  api2Img,
  api3Img,
  murexImg,
} from '../img/tech'

const ResumeItem = props => {
  const { techImgs, descriptions } = props

  return (
    <div className={styles.wrapCollabsible}>
      <input id={props.id} className={styles.toggle} type="checkbox" />
      <label htmlFor={props.id} className={styles.lblToggle}>
        <h4>{props.department}</h4>
        <div>
          <h4>{props.jobTitle}</h4>
          <h4>{props.dates}</h4>
        </div>
      </label>
      <div className={styles.collapsibleContent}>
        <div className={styles.contentInner}>
          <ol className={styles.descriptionList}>
            {descriptions
              ? descriptions.map(description => (
                  <li>
                    <span>• </span>
                    <p>{description}</p>
                  </li>
                ))
              : 'Descriptions loading...'}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <Container>
    <div className={styles.jobsContainer}>
    <h1>Experience</h1>

    <a href="https://www.mizuhobank.com/index.html" target="_blank">
      <h2 className={styles.companyname}>Mizuho Bank, Ltd</h2>
    </a>
    <ResumeItem
      id="MizuhoRM"
      jobTitle="Officer"
      department="Risk Management Department, Portfolio Analytics & Modeling"
      dates="Apr '17 - Jan '18"
      descriptions={[
        'Built and maintained an automated, comprehensive daily risk management dashboard for C-Suite executives that utilizes and manipulates data fed from several files, Bloomberg API, and Microsoft SQL database tables',
        'Authored monthly cross-asset market and macroeconomic recaps for senior management risk committee meetings',
        'Performed data cleansing on large data sets in order to identify and correct erroneous records',
      ]}
    />
    <ResumeItem
      id="MizuhoPMDS"
      jobTitle="Officer"
      department="Portfolio Management Department, Strategic Credit Hedge Office"
      dates="Sep '15 - Mar '17"
      descriptions={[
        'Developed and automated portfolio analytics for the group’s $55.6 billion loan portfolio in order to determine potential trade ideas based on single-name CDS relative value',
        'Built an archive and tracking tool to review trade performance using Bloomberg API and VBA',
        'Created a post-trade evaluation template, which pulls in and manipulates data from the archive in order to identify and attribute performance across an array of metrics versus a relevant benchmark',
        'Tested portfolio management system patches by drawing up test scenarios, simulating dummy trades and debugging results with third party vendor, Murex, and internal technology personnel',
        'Created a tool to track research blog traffic and identify users using VBA and Python knowledge',
        'Generated a portfolio profit and loss simulation report to assess potential market scenarios',
        'Produced a number of comprehensive manuals outlining procedures and operations',
      ]}
    />

    <a href="https://www.lordabbett.com/en.html" target="_blank">
      <h3>Lord, Abbett & Co</h3>
    </a>
    <ResumeItem
      id="LordAbbettAT"
      jobTitle="Associate Trader"
      department="Fixed Income, Municipal Bonds"
      dates="Oct '13 - Sep '15"
      descriptions={[
        'Developed and maintain a database of obligors by security in order to analyze differences in market value weighting and duration contribution between each fund and its internal benchmark',
        'Maintained a database of new issue pricing scales to determine the maximum returning maturity, and evaluate spreads versus other new issue deals and existing markets in the secondary',
        'Filtered sell-side prices, market information and research to identify relative value opportunities and relay information to portfolio managers with $10 billion in assets under management',
        'Analyzed performance attribution using Barclays POINT to distinguish deficiencies and strengths in fund asset allocation and security selection on a monthly, quarterly and yearly basis',
      ]}
    />
    <ResumeItem
      id="LordAbbettPA"
      jobTitle="Portfolio Analyst"
      department="Fixed Income, Municipal Bonds"
      dates="Jun '11 - Sep '13"
      descriptions={[
        'Constructed a database using VBA and Barclays POINT to present and maintain weekly year-to-date total return changes within the Barclays Aggregate and High Yield indices using several partitions',
        'Collaborated with the technology team to create a heat map that highlights fund versus internal index differences in yield curve, quality, time to next call, price, sector, and state positioning',
      ]}
    />
    </div>

  </Container>
)
