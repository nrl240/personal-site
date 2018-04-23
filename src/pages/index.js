import React from 'react'
import Link from 'gatsby-link'
import { Container, Title } from 'bloomer'

const IndexPage = () => (
  <Container hasTextAlign="centered">
    <Title isSize="1">Gatsby + Bulma & Bloomer</Title>
    <Title isSize="3">
      Easy <strong>vertical centering</strong> in <strong>fullscreen</strong>
    </Title>
    <Title isSize="4">Include any content you want, it's always centered</Title>
  </Container>
)

export default IndexPage

// export default () => (
//   <div>
//     <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//     <p>What do I like to do? Lots of course but definitely enjoy building websites.</p>
//   </div>
// )
