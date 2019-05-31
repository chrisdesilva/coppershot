import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import logosign from '../images/logosign.jpg'
import products from '../images/products.jpg'
import todees from '../images/todees.jpg'

const HomepageCards = () => {

    const style = {
        image: {
          height: '18rem',
          width: 'auto',
          padding: '1rem'
        },
        card: {
          margin: '3rem 3rem',
          height: '35rem'
        }
      }
    return (
    <Card.Group id="homePageCards">
        <ScrollAnimation animateIn="fadeInLeft">
            <Card id="card" style={style.card}>
                <Image style={style.image} fluid src={todees} />
                <Card.Content>
                <Card.Header>Who We Are</Card.Header>
                <Card.Description>
                    Copper Shot Distillery was founded in May 2016 by Stephen and Cheri Todee in Bastrop, Texas. Copper Shot is a small distillery that produces a variety of great tasting spirits.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Link className="cardLinks" to='/about'>About Us</Link>
                </Card.Content>
            </Card>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
            <Card id="card" style={style.card}>
                <Image style={style.image} fluid src={products} />
                <Card.Content>
                    <Card.Header>What We Do</Card.Header>
                    <Card.Description>
                    Copper Shot distills a variety of spirits on-site using a small still. We use our own rainwater collection that's been purified for use. We recycle and reuse all our ingredients, partnering with local farmers and fish bait producers.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link className="cardLinks" to='/recipes'>Check out some recipes</Link>
                </Card.Content>
            </Card>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <Card id="card" style={style.card}>
            <Image style={style.image} fluid src={logosign} />
            <Card.Content>
              <Card.Header>Who We Are</Card.Header>
              <Card.Description>
                Don't forget, we have taste testing flights and tours of the distillery. Mixed drinks available on-site. We have Moonshine, Vodka & Whiskey. Come check us out, we look forward to meeting and talking with you!     
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link className="cardLinks" to='/contact'>Get In Touch</Link>
            </Card.Content>
          </Card>
        </ScrollAnimation>
        </Card.Group>
    )
}

export default HomepageCards