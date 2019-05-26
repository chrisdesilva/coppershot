import React from 'react'
import { Grid, Icon, Menu } from 'semantic-ui-react'

const Navbar = () => {

  return (
    <Grid >
      <Grid.Row>
        <Grid.Column>
          <Menu id="footer" fluid widths={8} icon borderless>
            <Menu.Item href="https://www.facebook.com/coppershotdistillery/" target="_blank" rel="noreferrer noopener"><Icon inverted name="facebook" /></Menu.Item>
            <Menu.Item href="https://goo.gl/maps/EAUePyrb9DgpMSmG9" target="_blank" rel="noreferrer noopener"><Icon inverted name="map marker alternate" /></Menu.Item>
            <Menu.Item href="https://www.yelp.com/biz/copper-shot-distillery-bastrop" target="_blank" rel="noreferrer noopener"><Icon inverted name="yelp" /></Menu.Item>
          </Menu>
          <div style={{textAlign: 'center'}}><Icon name="copyright outline" /> Chris DeSilva, 2019</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Navbar