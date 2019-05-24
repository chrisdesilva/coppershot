import React, { useState } from 'react'
import { Container, Image, Menu, Segment } from 'semantic-ui-react'
import coppershotlogo  from '../images/coppershotlogo.png'

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const Navbar = () => {

  const [ activeItem, setActiveItem] = useState('home')

  const handleSetActive = (e, { name }) => setActiveItem(name)

  return (
    <Segment inverted>
      <Menu fluid widths={8} fixed='top' inverted borderless stackable>
        <Container style={style.container}>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={handleSetActive} as='a'>Home</Menu.Item>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={handleSetActive} as='a'>About</Menu.Item>
          <Menu.Item header>
            <Image size="tiny" src={coppershotlogo} style={{ marginRight: '1.5em' }} />
          </Menu.Item>
          <Menu.Item name='recipes' active={activeItem === 'recipes'} onClick={handleSetActive} as='a'>Recipes</Menu.Item>
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={handleSetActive} as='a'>Contact</Menu.Item>
        </Container>
      </Menu>
    </Segment>
  )
}

export default Navbar