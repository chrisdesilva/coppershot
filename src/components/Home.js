import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import patio from '../images/patio.jpg'

const Home = () => {
  return (
      <Container>
      <h1>Copper Shot Distillery</h1>
        <Image src={patio} centered fluid />
      </Container>
  )
}

export default Home