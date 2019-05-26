import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Button, Container, Dimmer, Header } from 'semantic-ui-react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipes from './components/Recipes'

function App() {

  const [ overTwentyOne, setOverTwentyOne ] = useState(false)
  const [ active, setActive ] = useState(true)

  const isTwentyOne = () => {
    setOverTwentyOne(true)
    setActive(false)
  }

  return (
    <Router>
      <div>
      <Dimmer active={active} page>
        <Header as='h2' inverted>
          Are you over 21 years old?
          <div style={{marginTop: '2rem'}}>
          <Button.Group>
            <Button color="green" onClick={isTwentyOne}>Yes</Button>
            <Button.Or />
            <Button href="https://www.youtube.com/watch?v=31g0YE61PLQ" color="red">No</Button>
          </Button.Group>
          </div>
        </Header>
      </Dimmer>
        {overTwentyOne && <Container><Navbar /></Container>}
        {overTwentyOne && <Route exact path='/' component={Home} /> }
        {overTwentyOne && <Route exact path='/about' component={About} />}
        {overTwentyOne && <Route exact path='/recipes' component={Recipes} />}
        {overTwentyOne && <Route exact path='/contact' component={Contact} />}
      </div>
    </Router>
  );
}

export default App;
