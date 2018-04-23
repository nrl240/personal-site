import React from 'react'
import noelle from '../img/noelle.jpg'

export default () => (
  <div>
    <h1>About</h1>
    <p>
      Hi! My name is Noelle. I was born and raised in New York. After studying Economics at NYU, I
      worked at{' '}
      <a style={styles.link} href="https://www.lordabbett.com/en.html" target="_blank">
        Lord Abbett
      </a>{' '}
      and{' '}
      <a style={styles.link} href="https://www.mizuhoamericas.com" target="_blank">
        Mizuho Bank
      </a>, where I got my first taste of programming.
    </p>
    <img src={noelle} style={styles.img}/>
  </div>
)

const styles = {
  link: {
    textDecoration: 'none',
    color: 'purple',
    ':hover': {
      textDecoration: 'none',
      color: 'navy',
    },
  },
  img: {
    borderRadius: '50%',
    width: '50%',
    align: 'center'
  }
}
