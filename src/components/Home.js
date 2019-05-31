import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import Footer from './Footer'
import HomepageCards from './HomepageCards'
import patio from '../images/patio.jpg'


const Home = () => {

  return (
      <Container>
      <h1>Copper Shot Distillery</h1>
        <Image style={{marginBottom: '2rem'}} src={patio} centered fluid />
        <HomepageCards />
        <Footer />
      </Container>
  )
}

export default Home