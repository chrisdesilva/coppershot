import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Logobanner from './Logobanner'

const Navbar = () => {

  return (
    <div>
    <Fade><Logobanner /></Fade>
        <Menu id="navbar" fluid widths={4} inverted borderless>
          <Menu.Item fitted to='/'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item fitted><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item fitted><Link to='/recipes'>Recipes</Link></Menu.Item>
          <Menu.Item fitted><Link to='/contact'>Contact</Link></Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar