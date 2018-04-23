import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div>
    <h1>Projects</h1>
    <h2>
      <a style={{ display: 'table-cell' }} href="https://github.com/nrl240" target="_blank">
        GitHub
      </a>
    </h2>
    <div style={styles.projectContainer}>
        <h3>🌎 MapStack 🌍</h3>
      <p>
        Create, follow and stack maps to plan a vacation full of the best local hot spots and off
        the beaten path gems 💎
      </p>
      <ul>
        <li>
          GitHub repository 👉{' '}
          <a href="https://github.com/FSACapstone/MapIt" target="_blank">
            https://github.com/FSACapstone/MapIt
          </a>
        </li>
        <li>
          Start sharing your favorite places with us at{' '}
          <a href="https://map-it-fsa.firebaseapp.com/" target="_blank">
            https://map-it-fsa.firebaseapp.com/
          </a>{' '}
          📍
        </li>
      </ul>
    </div>
    <div style={styles.projectContainer}>
      <h3>🎶 The Listening Room 🎶</h3>
      <p>
        Passionate about music, <a href="https://luis-rincon-portfolio.herokuapp.com/" target="_blank">Luis Rincon</a> and I
        developed The Listening Room during a four-day hackathon. By leveraging Firebase's Cloud
        Storage and Realtime Database, users are able to seamlessly upload mp3 files, and listen and
        chat about music simultaneously anywhere in the world, without skipping a beat. The
        minimalistic front-end was built using React and Flexbox.
      </p>
      <ul>
        <li>
          GitHub repository 👉{' '}
          <a href="https://github.com/TheListeningRoom/the-listening-room" target="_blank">
            https://github.com/TheListeningRoom/the-listening-room
          </a>
        </li>
        <li>
          Share tunes at{' '}
          <a href="https://symbalplayer.firebaseapp.com/" target="_blank">
            https://symbalplayer.firebaseapp.com/
          </a>{' '}
          🎧
        </li>
      </ul>
    </div>
    <div style={styles.projectContainer}>
      <h3>🌶 Saucesome 🌶</h3>
      <p>
        Built in a week by a team of four developers launching their careers in tech, Saucesome is a
        spicy, mock e-commerce site that sells hot sauce sourced from all around the world. They
        utilized Node.js, Express, Postgres and Sequelize in the back-end, and React-Redux, Mapbox
        and extensive CSS with Bootstrap and Flexbox in the front-end. Google authentication was
        used for a seamless login experience using Passport. Nodemailer was leveraged for sending
        customers order confirmation emails.
      </p>
      <ul>
        <li>
          GitHub repository 👉{' '}
          <a href="https://github.com/saucesome-gs/saucesome" target="_blank">
            https://github.com/saucesome-gs/saucesome
          </a>
        </li>
        <li>
          Can you handle the heat?{' '}
          <a href="https://saucesome-fsa.herokuapp.com/" target="_blank">
            https://saucesome-fsa.herokuapp.com/
          </a>{' '}
          🔥
        </li>
      </ul>
    </div>
  </div>
)

const styles = {
  projectContainer: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    padding: `5px 10px`,
  },
}
