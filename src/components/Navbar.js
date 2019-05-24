import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import coppershotlogo  from '../images/coppershotlogo.png'

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const Navbar = () => {

  return (
      <Menu fluid widths={8} fixed='top' inverted borderless stackable>
        <Container style={style.container}>
          <Menu.Item to='/'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item ><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item header>
            <Image size="tiny" src={coppershotlogo} style={{ marginRight: '1.5em' }} />
          </Menu.Item>
          <Menu.Item><Link to='/recipes'>Recipes</Link></Menu.Item>
          <Menu.Item><Link to='/contact'>Contact</Link></Menu.Item>
        </Container>
      </Menu>
  )
}

export default Navbar