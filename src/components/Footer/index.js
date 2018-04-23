import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon, Image } from 'bloomer'

import gmail from '../../img/gmail.svg'
import linkedin from '../../img/linkedin.svg'
import github from '../../img/github.svg'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns style={styles.imgsContainer}>
          <Column style={styles.img}>
            <a href="mailto:nrlaureano@gmail.com" target="_blank">
              <Image src={gmail} isSize="48x48" />
            </a>
          </Column>
          <Column style={styles.img}>
            <a href="https://www.linkedin.com/in/noellelaureano/" target="_blank">
              <Image src={linkedin} isSize="48x48" />
            </a>
          </Column>
          <Column style={styles.img}>
            <a href="https://github.com/nrl240" target="_blank">
              <Image src={github} isSize="48x48" />
            </a>
          </Column>
        </Columns>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter

const styles = {
  imgsContainer: {
    display: `flex`,
    justifyContent: `center`,
  },
  img: {
    display: `flex`,
    justifyContent: `center`,
  },
}

// <p>
// Made with<Icon hasTextColor="danger" className="fa fa-heart" />
// by Noelle Laureano
// </p>
