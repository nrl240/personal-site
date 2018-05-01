import React from 'react'
import Link from 'gatsby-link'
import styles from './projects.module.css'
import Container from '../components/container'

import mapStackMockup from '../img/mapstackmockup.png'
import saucesomeMockup from '../img/saucesomemockup.png'
import theListeningRoomMockup from '../img/theListeningRoomMockup.png'

const Project = props => (
  <div className={styles.project}>
    <div className={styles.description}>
      <h2 className={styles.projectname}>{props.projectname}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
      <img src={props.mockup} className={styles.mockup} alt="" />
      <div className={styles.buttons}>
        <a href={props.siteUrl} target="_blank">
          <button className="button" >
            {props.projectname}
          </button>
        </a>
        <a href={props.githubUrl} target="_blank">
          <button className="button">
            GitHub
          </button>
        </a>
      </div>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>Projects</h1>
    <Project
      projectname="MapStack"
      mockup={mapStackMockup}
      excerpt="A social media platform that allows users to create, follow and stack maps on one another to curate a perfect collection of places to explore in their own neighborhood or halfway around the world."
      siteUrl="https://map-it-fsa.firebaseapp.com/"
      githubUrl="https://github.com/FSACapstone/MapIt"
    />

    <Project
      projectname="Saucesome"
      mockup={saucesomeMockup}
      excerpt="A mock e-commerce site that sells a carefully curated selection of gourmet hot sauces from small-match makers around the world. Saucesome also integrates the Mapbox API to show the shoppers where their desired hot sauce is made."
      siteUrl="https://saucesome-fsa.herokuapp.com/"
      githubUrl="https://github.com/saucesome-gs/saucesome"
    />

    <Project
      projectname="The Listening Room"
      mockup={theListeningRoomMockup}
      excerpt="Passionate about music, Luis Rincon and I developed The Listening Room during a four-day hackathon. By leveraging Firebase's Cloud Storage and Realtime Database, users are able to seamlessly upload mp3 files, and listen and chat about music simultaneously anywhere in the world, without skipping a beat. The minimalistic front-end was built using React and Flexbox."
      siteUrl="https://symbalplayer.firebaseapp.com/"
      githubUrl="https://github.com/TheListeningRoom/the-listening-room"
    />

  </Container>
)

