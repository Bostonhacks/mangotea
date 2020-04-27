import React from 'react'
import './App.css'
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'

import './styles/Router.css'
import './pages/Home/components/Home.css'

import Home from './pages/Home/components/Home'
import Organizer from './pages/Organizer'

import BostonHacks from './images/bostonhackslogo.jpg'

// TODO: Set up react router
//       Work on About/Contact and Organizer pages

function App() {
  return (
    <Router>
        <ul id="nav" class="nav nav-pills">
            <li class="nav-item"> 
              <img src={BostonHacks} className="router-logo" alt="logo"/>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/organizer">Organizers</Link>
            </li>
        </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={Home}/>
            <Route path="/contact" component={Home}/>
            <Route path="/organizer" component={Organizer}/>
          </Switch>
      </Router>
  );
}

export default (App)