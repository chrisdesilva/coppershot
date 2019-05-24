import React from 'react'
import { Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import coppershotlogo  from '../images/coppershotlogo.png'

const Navbar = () => {

  return (
    <div>
      <MediaQuery minDeviceWidth={1200}>
        <Menu fluid widths={8} fixed='top' inverted borderless>
          <Menu.Item to='/'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item ><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item header>
            <Image size="tiny" src={coppershotlogo} />
          </Menu.Item>
          <Menu.Item><Link to='/recipes'>Recipes</Link></Menu.Item>
          <Menu.Item><Link to='/contact'>Contact</Link></Menu.Item>
        </Menu>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1200}>
        <Menu fluid widths={5} fixed='bottom' inverted borderless>
          <Menu.Item to='/'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item ><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item header>
            <Image size="tiny" src={coppershotlogo} />
          </Menu.Item>
          <Menu.Item><Link to='/recipes'>Recipes</Link></Menu.Item>
          <Menu.Item><Link to='/contact'>Contact</Link></Menu.Item>
        </Menu>
      </MediaQuery>
    </div>
  )
}

export default Navbar