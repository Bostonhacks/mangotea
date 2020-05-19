import React from 'react'
import './App.css'
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'
import './styles/Router.css'
import './styles/Home.css'
import Home from './pages/Home'
import About from './pages/About.js'
import Organizer from './pages/Organizer'
import headLogo from "./images/Logo_Small_header.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// TODO: Set up react router
//       Work on About/Contact and Organizer pages

function App() {
  return (
    <Router>
      <div className="router-div">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
        
            <ul class="nav navbar-nav">
              <li>
                <img src={headLogo} className="App-logo" alt="logo"/>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About/Contact</Link>
              </li>
              <li>
                <Link to="/organizer">Organizers</Link>
              </li>
              
            </ul>
          {/* </div> */}
        </nav>
        <ul>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/organizer" component={Organizer}/>

        </Switch>
      </div>
    </Router>
  );
}

export default (App)