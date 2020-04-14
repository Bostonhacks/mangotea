import React from 'react'
import logo from './logo.svg'
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

// TODO: Set up react router
//       Work on About/Contact and Organizer pages

function App() {
  return (
    <Router>
      <div className="router-div">
        <ul>
          <li>
            <img src={logo} className="App-logo" alt="logo"/>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/organizer">Organizers</Link>
          </li>

        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Home}/>
          <Route path="/contact" component={Home}/>

          <Route path="/organizer" component={Organizer}/>

        </Switch>
      </div>
    </Router>
  );
}

export default (App)