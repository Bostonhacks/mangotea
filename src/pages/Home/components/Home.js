import React from 'react';
import pinata from "./pinata.jpg";
import location_fall_2017 from "./location_fall_2017.jpg";
import highlight_fall_2017 from "./highlight_fall_2017.jpg";
import organizers from "./organizers.png";

import './Home.css';
// import card from "./card.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className = "main-content">
        		<div className = "pinata">
        			<img src={pinata} alt = "the pinata" />
        		</div>

        		<div id="link">
        			<button id="button">
        				<a href="https://bostonhacks.io/">ENTER FALL 2019 SITE</a>
        			</button> 
        		</div>
				<hr />
				<div class="container-fluid text-center">
					<h1>Past Events</h1>
					<div class="row">
						<div class="col-sm-3" >
							<h2>BostonHacks Three</h2>


							<div id="demo" class="carousel slide" data-ride="carousel">
								{/* <!-- Indicators --> */}
								<ul class="carousel-indicators">
									<li data-target="#demo" data-slide-to="0" class="active"></li>
									<li data-target="#demo" data-slide-to="1"></li>
									<li data-target="#demo" data-slide-to="2"></li>
								</ul>

								{/* <!-- The slideshow --> */}
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src={location_fall_2017} alt="First slide"/>
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src={highlight_fall_2017} alt="Second slide"/>
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src={organizers} alt="Third slide"/>
									</div>
								</div>

								{/* <!-- Left and right controls --> */}
								<a class="carousel-control-prev" href="#demo" data-slide="prev">
									<span class="carousel-control-prev-icon"></span>
								</a>
								<a class="carousel-control-next" href="#demo" data-slide="next">
									<span class="carousel-control-next-icon"></span>
								</a>					
							</div>

							<p>Fall 2017</p>
							<p>Directed by Lucas Watson</p>
						</div>
					



						<div class="mobileHide col-sm-9 box"  style={{backgroundColor: "#f2f2f2"}}>
							{/* <div class="card-columns"></div> */}
							<div class="row">
								<div class="col-sm-3">
									<div style={{backgroundColor: "white", boxShadow: "5px 1px 17px 0px grey", padding: "40px", margin: '10px 0'}}>
                    <h3> 485</h3>
                    <p>attendies</p>
                  </div>
								</div>
								
								<div class="col-sm-9" >
									<div style={{backgroundColor: "white", boxShadow: "5px 7px 17px 0px grey", padding: "24px", margin:"10px 0"}}>
                    <h3>Prizes:</h3>
                    <p>Apple Airpods, Google Pixel Buds, Drones, Google Home Minis, Amazon Giftcards, 
                      Amazon Echos, Cash, MiP Robots, Spark Fellowship, Raspberry Pis, Dragonboards. 
                    </p>
                  </div>
								</div>
							</div> {/* row */}

							<div class="row">
								<div class="col-sm-9">
									<div style={{backgroundColor: "white", boxShadow: "5px 1px 17px 0px grey", padding: "24px", margin: "10px 0"}}>
                    <h3>Sponsors</h3>
                    <p> Optum, Liberty Mutual, RedHat, Twilio, Weedmaps, Cadence, ITG, BU Spark, 
                      Boston University Department of Computer Science </p>
                  </div>
								</div>

								<div class="col-sm-3">
									<div style={{backgroundColor: "white", boxShadow: "5px 1px 17px 0px grey", padding: "24px", margin: "10px 0"}}>
                    <p>See the projects on <a href="https://bostonhacks-f17.devpost.com/">Devpost</a></p>
                  </div>
								</div>
							</div> {/* row */}

							<div class="row">
								<div class="col-sm-12" >
									<div style={{backgroundColor: "white", boxShadow: "5px 1px 17px 0px grey", padding: "24px", marginTop: "10px"}}>
                    <h3>Organizers</h3>
                    <p> Andrew Hoang, Anna Goncharova, Brandon Ng, Mark Bestavros, Katie Quirk, Rudhra Raveendran, 
                      Ken Garber, Sean Zhang, Charles Ma, Warren Partridge, Mariana Garces Dematté, Ibrahim Shaikh, 
                      Sarah Greisdorf, Noah Naiman, Jason Cho, Sarah Rieger, Emmanuel Amponsah </p>
                  </div>
                  
								</div>
							</div> {/* row */}
						</div>{/* mobileHide col-sm-9 box */}												
					</div>{/* row */}
					<hr />
				</div> {/* container-fluid text-center */}		
		</div> //main-content
		  
    )
}

export default Home;

 