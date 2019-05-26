import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Button, Container, Dimmer, Header } from 'semantic-ui-react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipes from './components/Recipes'

function App() {

  const [ isLegalAge, setisLegalAge ] = useState(false)

  return (
    <Router>
      <div>
      <Dimmer active={!isLegalAge} page>
        <Header as='h2' inverted>
          Are you over 21 years old?
          <div style={{marginTop: '2rem'}}>
          <Button.Group>
            <Button color="green" onClick={() => setisLegalAge(true)}>Yes</Button>
            <Button.Or />
            <Button color="red">No</Button>
          </Button.Group>
          </div>

        </Header>
      </Dimmer>
      {isLegalAge && <Container><Navbar /></Container>}
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
