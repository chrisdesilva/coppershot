import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import logosign from '../images/logosign.jpg'

const Home = () => {
  return (
      <Container>
        <Image src={logosign} centered fluid />
      </Container>
  )
}

export default Home