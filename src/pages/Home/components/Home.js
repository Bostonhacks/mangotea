import React from 'react';
import pinata from "./pinata.jpg";
import location_fall_2017 from "./location_fall_2017.jpg";
import highlight_fall_2017 from "./highlight_fall_2017.jpg";
import organizers from "./organizers.png";

import './Home.css';
// import card from "./card.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

{/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
				<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
				<!------ Include the above in your HEAD tag ---------->

				<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css' /> */}

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

				<div class="container-fluid">
						<div class="row">
							<div class="col-sm-4">
								<div class="tile">
									<div class="wrapper">
										{/* <div class="banner-img">
											<img src={"http://via.placeholder.com/640x360"} alt="Image 1"/>
										</div> */}

										<div id="demo" class="carousel slide" data-ride="carousel">

										{/* <!-- Indicators --> */}
										<ul class="carousel-indicators">
											<li data-target="#demo" data-slide-to="0" ></li>
											<li data-target="#demo" data-slide-to="1"></li>
											<li data-target="#demo" data-slide-to="2"></li>
										</ul>

										{/* <!-- The slideshow --> */}
										<div class="carousel-inner">
											<div class="carousel-item active">
												<img class="d-block w-100" src={location_fall_2017} alt="Los Angeles"/>
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={highlight_fall_2017} alt="Chicago"/>
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={organizers} alt="New York"/>
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
									</div>
								</div>
							</div>						
							
							
							<div class="col-sm-8">
								<div class="tile">
									<div class="wrapper">
										<div class="header">BostonHacks Three</div>								

										<div class="dates">
											<div class="start" class="col-sm-3">
												<strong>Attendees</strong> 485
												<span></span>
											</div>

											<div class="ends" class="col-sm-9">
												<strong>Prizes</strong>
												Apple Airpods, Google Pixel Buds, Drones, Google Home Minis, Amazon Giftcards, Amazon Echos, Cash, MiP Robots, Spark Fellowship, Raspberry Pis, Dragonboards 
											</div>
										</div>

										{/* <div class="stats" >
											<div>
												<strong>Attendees</strong> 485
											</div>
											
											<div>
												<strong>JOINED</strong> 562
											</div>													

											<div>
												<strong>DECLINED</strong> 182
											</div>

										</div> */}

										
										<div class="footer">
											<a href="#" class="Cbtn Cbtn-primary">View</a>
											<a href="#" class="Cbtn Cbtn-danger">Delete</a>
										</div>
									</div>
								</div> 
							</div>							
						</div>
					</div>
 




		</div> //main-content
		  
    )
}

export default Home;

 