import React, { Component } from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class About extends Component {
	render() {
        return (
            <div className="main-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-5">
                            <h1>About Us</h1>
                            <br />
                            <h4>What's a hackathon?</h4>
                            <p>A hackathon is an overnight event where programmers, 
                                artists, and entrepreneurs gather to learn and hack 
                                together creative and useful projects. They're filled 
                                with free food, swag, and prizes, and are a great 
                                opportunity to network with other hackers and sponsors.
                                </p>
                            <br />
                            <h4>What's BostonHacks?</h4>
                            <p>BostonHacks was started at Boston University in 2015 as a 
                                medium sized hackathon with nationwide attendance. We've quickly 
                                grown into a large-tier international hackathon known for our 
                                productive and positive vibes, great sponsor relations, and awesome 
                                prizes and swag (unofficially, the best swag in the game).      
                            </p>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-4">
                            <h4>Next Boston<b>Hacks</b></h4>
                            <h1>Date not fixed yet</h1>
                            <br />
                            <br />
                            <br />
                            <h4>Contact us</h4>
                            <h6>Email</h6>
                            <p>contact@bostonhacks.io</p>
                            <h6>Facebook</h6>
                            <p>
                                <a href="https://www.facebook.com/bostonhacks/">BostonHacks page</a>
                            </p>
                            <h6>Twitter</h6>
                            <p>
                                <a href="https://twitter.com/boston_hacks">@boston_hacks</a>
                            </p>
                            <h6>Instagram</h6>
                            <p>
                                <a href="https://instagram.com/bostonhacks">@boston_hacks</a>
                            </p>                            
                        </div>                    
                        
                    </div>
                </div>
            </div>

        )

    }
}

export default About;