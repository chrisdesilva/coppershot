import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipes from './components/Recipes'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
