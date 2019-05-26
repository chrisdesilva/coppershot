import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import Footer from './Footer'
import todees from '../images/todees.jpg'

const About = () => {
  return (
    <Container style={{height: '100vh'}}>
    <h2>About</h2>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <p>
            Copper Shot Distillery is owned and operated by husband and wife team, Stephen and Cheri Todee. Our journey started with Stephen's love of experimenting, engineering and the challenges of trying new things. Together we have created a business of "Producing Great Spirits". 
            </p>
            <p>
            Copper shot distillery hand crafts all of their American distilled spirits on-site with Rain water, local grains and made in small batches. Small batches is what creates the quality and the best flavor. Crafting spirits is a very hands-on process and is a lot like science and engineering all in one. You can recognize most of our products that are distributed in liquor stores by our business logo engraved copper shot glass on top of the bottle. Hence how the name Copper Shot was created. 
            </p>
            <p>
            **** Bottles purchased directly from the distillery, we give you the option to purchase with or without the copper shot glass. **** 
            </p>
            <p>
            At Copper Shot we love what we do and believe you will love our products as much as we do in making them. Our hopes are that you will give Copper Shot a try and see for yourself, just how great the spirits are. 
            </p>
            <p>
            We are located in beautiful downtown Bastrop, TX near the Colorado River. If you're ever in our area, please come by to see the process for yourself. We have mixed drinks available on-site, as well. 
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={7}>
            <Image bordered rounded src={todees} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </Container>
  )
}

export default About