import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import Logobanner from './Logobanner'

const Navbar = () => {

  return (
    <div>
    <Logobanner />
      <MediaQuery minDeviceWidth={1200}>
        <Menu id="navbar" fluid widths={8} inverted borderless>
          <Menu.Item fitted to='/'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item fitted><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item fitted><Link to='/recipes'>Recipes</Link></Menu.Item>
          <Menu.Item fitted><Link to='/contact'>Contact</Link></Menu.Item>
        </Menu>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1200}>
        <Menu id="navbar" fluid widths={5} fixed='bottom' style={{marginTop: '2rem'}} inverted borderless>
          <Menu.Item fitted to='/'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item fitted ><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item fitted><Link to='/recipes'>Recipes</Link></Menu.Item>
          <Menu.Item fitted><Link to='/contact'>Contact</Link></Menu.Item>
        </Menu>
      </MediaQuery>
    </div>
  )
}

export default Navbar