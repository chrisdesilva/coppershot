import React from 'react'
import { Image } from 'semantic-ui-react'
import coppershotlogo  from '../images/coppershotlogo.png'

const style = {
  display: 'flex',
  justifyContent: 'center',
  height: '150px',
  width: '150px',
  marginTop: '2rem'
}

const Logobanner = () => {
  return (
    <div id="logoBanner" style={style}>
      <Image src={coppershotlogo} />
    </div>
  )
}

export default Logobanner