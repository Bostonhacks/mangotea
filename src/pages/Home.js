import React, { Component } from 'react';
import location_fall_2017 from "../images/location_fall_2017.jpg";
import highlight_fall_2017 from "../images/highlight_fall_2017.jpg";
import organizers_2017 from "../images/organizers.png";
import location_fall_2015 from "../images/location_fall_2015.png";
import highlight_fall_2015 from "../images/highlight_fall_2015.jpg";
import organizers_2015 from "../images/organizers_fall_2015.jpg";
import location_spring_2017 from "../images/location_spring_2017.jpg";
import highlight_spring_2017 from "../images/highlight_spring_2017.jpg";
import organizers_spring_2017 from "../images/organizers_spring_2017.jpg";
import images_2018_1 from "../images/bhacks2018pic1.jpg";
import images_2018_2 from "../images/bhacks2019pic2.jpg";
import organizers_2019 from "../images/organizers_2019.jpg";
import location_2019 from "../images/location_2019.jpg";
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Info from "../components/Info.js";
import Header from "../components/Header.js";

class Home extends Component {
	render() {
		return (
			<div className="main-content">
				<Header />
				<hr />

				<div class="container-fluid">
					<div class="row">
						<div class="col-sm-4">
							<div class="tile">
								<div class="wrapper">
									<div id="demo" class="carousel slide" data-ride="carousel">
										{/* <!-- Indicators --> */}
										<ul class="carousel-indicators">
											<li data-target="#demo" data-slide-to="0" ></li>
											<li data-target="#demo" data-slide-to="1"></li>
											
										</ul>

										{/* <!-- The slideshow --> */}
										<div class="carousel-inner">
											<div class="carousel-item active">
												<img class="d-block w-100" src={location_2019} alt="location_2019" />
											</div>
											
											<div class="carousel-item">
												<img class="d-block w-100" src={organizers_2019} alt="organizers_2019" />
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
						{/* col-sm-4 */}

						<div class="col-sm-8">
							<div class="tile">
								<div class="wrapper">
									<div class="header">
										<Info title="BostonHacks Five" />
									</div>
									<div class="dates">
										<div className="col-sm-3">
											<strong>Attendees</strong>
											<div style={{ paddingLeft: "40%" }}>
												<Info attendees="500" />
											</div>
											<span></span>
										</div>

										<div className="col-sm-9">
											<strong>Prizes</strong>
											<Info prizes="Bose Noise Cancelling Headphone 700, Drones, Uber Eats Giftcard,
														Google Home Minis, Amazon Giftcards, R2D2 Droid Kits,
														Spark Fellowship, Dragonboards" />
											<span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-9">
											<strong>Sponsors</strong>
											<Info sponsors="AstraZeneca, Twilio, Bose, Capital One, Google, John Hancock,
															string&&loop, Raytheon, Sticker Mule, Kind,
															BU Spark, Boston University Department of Computer Science" />
											<span></span>
										</div>

										<div className="col-sm-3">
											<strong>Prizes</strong>
											See the projects on <a href="https://bostonhacks-2019.devpost.com/">Devpost!</a><span></span>
										
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-12">
											<strong>Organizers</strong>
											<Info organizers="Rudhra Raveendran, Charles Ma, Warren Partridge, Mariana Garces Dematté, 
															Sarah Greisdorf, Noah Naiman, Jason Cho, Roger Ramesh, Christopher Chang,
															Jin-Young Bang, Pham Quang Nam, Tin Nguyen, Xavier Ruiz, Asif Rahman,
															Rishab Nayak, Micheal Hendric, Jennifer Kim, Ramsha Arshad, Lisa Vu,
															Chinwe Bianca Oparaji, Blake Abel, Melissa Lin, Victoria Koala, Prim Promchotichai,
															Nikita Jakkam, Ben Lague, Jason Li, Angela Tran, Alicja Wisniowska, Alex Ferra,
															Jennifer Roh, Gabriella Roman
															" />
											<span></span>
										</div>
									</div>
								</div> {/*wrapper*/}
							</div>{/*tile*/}
							<hr />
						</div>{/* col-sm-8 */}						
					</div> {/* row */}



					<div class="row">
						<div class="col-sm-4">
							<div class="tile">
								<div class="wrapper">
									<div id="demo18" class="carousel slide" data-ride="carousel">
										{/* <!-- Indicators --> */}
										<ul class="carousel-indicators">
											<li data-target="#demo18" data-slide-to="0" ></li>
											<li data-target="#demo18" data-slide-to="1"></li>
										</ul>

										{/* <!-- The slideshow --> */}
										<div class="carousel-inner">
											<div class="carousel-item active">
												<img class="d-block w-100" src={images_2018_1} alt="images_2018_1" />
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={images_2018_2} alt="images_2018_2" />
											</div>
											
										</div>

										{/* <!-- Left and right controls --> */}
										<a class="carousel-control-prev" href="#demo18" data-slide="prev">
											<span class="carousel-control-prev-icon"></span>
										</a>
										<a class="carousel-control-next" href="#demo18" data-slide="next">
											<span class="carousel-control-next-icon"></span>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* col-sm-4 */}

						<div class="col-sm-8">
							<div class="tile">
								<div class="wrapper">
									<div class="header">
										<Info title="BostonHacks Four" />
									</div>
									<div class="dates">
										<div className="col-sm-3">
											<strong>Attendees</strong>
											<div style={{ paddingLeft: "40%" }}>
												<Info attendees="575" />
											</div>
											<span></span>
										</div>

										<div className="col-sm-9">
											<strong>Prizes</strong>	
											<Info prizes="Nintendo Switches, Amazon Echo Spots, Google Home Hub, Surface Go Tablets, 
											Spark! Fellowship, 410C Dragonboard, Casio CA-506C-5A, Star Wars Millennium Falcon Waffle Makers" />
											<span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-9">
											<strong>Sponsors</strong>
											<Info sponsors="Twilio, Google, Giphy, ITG, BU Spark, Liberty Mutual, 
											Boston University Department of Computer Science, Raytheon, Bose, GitHub, Unity, IBM" />
											<span></span>
										</div>

										<div className="col-sm-3">
											<strong>Prizes</strong>
											See the projects on <a href="https://bostonhacks-f2018.devpost.com/">Devpost!</a><span></span>
										
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-12">
											<strong>Organizers</strong>
											<Info organizers="Mark Bestavros, Rudhra Raveendran, Ken Garber, Sean Zhang, 
															Charles Ma, Warren Partridge, Mariana Garces Dematté, Ibrahim Shaikh,
															Sarah Greisdorf, Noah Naiman, Jason Cho, Sarah Rieger, Emmanuel Amponsah,															 
															Roger Ramesh, Pham Quang Nam, Micheal Hendric, Jennifer Kim, Ramsha Arshad, Lisa Vu,
															Chinwe Bianca Oparaji, Melissa Lin, Victoria Koala, Ben Lague, Jason Li, Alex Ferra,
															Jennifer Roh, Gabriella Roman, Lucas Watson, Sid Premkumar"
															 />
											<span></span>
										</div>
									</div>
								</div> {/*wrapper*/}
							</div>{/*tile*/}
							<hr />
						</div>{/* col-sm-8 */}						
					</div> {/* row */}


					<div class="row">
						<div class="col-sm-4">
							<div class="tile">
								<div class="wrapper">
									<div id="demo17" class="carousel slide" data-ride="carousel">
										{/* <!-- Indicators --> */}
										<ul class="carousel-indicators">
											<li data-target="#demo17" data-slide-to="0" ></li>
											<li data-target="#demo17" data-slide-to="1"></li>
											<li data-target="#demo17" data-slide-to="2"></li>
										</ul>

										{/* <!-- The slideshow --> */}
										<div class="carousel-inner">
											<div class="carousel-item active">
												<img class="d-block w-100" src={location_fall_2017} alt="Los Angeles" />
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={highlight_fall_2017} alt="Chicago" />
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={organizers_2017} alt="New York" />
											</div>
										</div>

										{/* <!-- Left and right controls --> */}
										<a class="carousel-control-prev" href="#demo17" data-slide="prev">
											<span class="carousel-control-prev-icon"></span>
										</a>
										<a class="carousel-control-next" href="#demo17" data-slide="next">
											<span class="carousel-control-next-icon"></span>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* col-sm-4 */}

						<div class="col-sm-8">
							<div class="tile">
								<div class="wrapper">
									<div class="header">
										<Info title="BostonHacks Three" />
									</div>
									<div class="dates">
										<div className="col-sm-3">
											<strong>Attendees</strong>
											<div style={{ paddingLeft: "40%" }}>
												<Info attendees="485" />
											</div>
											<span></span>
										</div>

										<div className="col-sm-9">
											<strong>Prizes</strong>
											<Info prizes="Apple Airpods, Google Pixel Buds, Drones,
														Google Home Minis, Amazon Giftcards, Amazon Echos,
														Cash, MiP Robots, Spark Fellowship, Raspberry Pis, 
														Dragonboards" />
											<span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-9">
											<strong>Sponsors</strong>
											<Info sponsors="Optum, Liberty Mutual, RedHat, Twilio, Weedmaps, Cadence,
															ITG, BU Spark, Boston University Department of Computer Science" />
											<span></span>
										</div>

										<div className="col-sm-3">
											<strong>Prizes</strong>
												See the projects on <a href="https://bostonhacks-f17.devpost.com/">Devpost!</a><span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-12">
											<strong>Organizers</strong>
											<Info organizers="Andrew Hoang, Anna Goncharova, Brandon Ng, Mark Bestavros, 
															Katie Quirk, Rudhra Raveendran, Ken Garber, Sean Zhang, 
															Charles Ma, Warren Partridge, Mariana Garces Dematté, Ibrahim Shaikh,
															Sarah Greisdorf, Noah Naiman, Jason Cho, Sarah Rieger, Emmanuel Amponsah" />
											<span></span>
										</div>
									</div>
								</div> {/*wrapper*/}
							</div>{/*tile*/}
							<hr />
						</div>{/* col-sm-8 */}						
					</div> {/* row */}

					<div class="row">
						<div class="col-sm-4">
							<div class="tile">
								<div class="wrapper">
									<div id="demo2016" class="carousel slide" data-ride="carousel">
										{/* <!-- Indicators --> */}
										<ul class="carousel-indicators">
											<li data-target="#demo2016" data-slide-to="0" ></li>
											<li data-target="#demo2016" data-slide-to="1"></li>
											<li data-target="#demo2016" data-slide-to="2"></li>
										</ul>

										{/* <!-- The slideshow --> */}
										<div class="carousel-inner">
											<div class="carousel-item active">
												<img class="d-block w-100" src={location_spring_2017} alt="location_spring_2017" />
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={highlight_spring_2017} alt="highlight_spring_2017" />
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={organizers_spring_2017} alt="organizers_spring_2017" />
											</div>
										</div>

										{/* <!-- Left and right controls --> */}
										<a class="carousel-control-prev" href="#demo2016" data-slide="prev">
											<span class="carousel-control-prev-icon"></span>
										</a>
										<a class="carousel-control-next" href="#demo2016" data-slide="next">
											<span class="carousel-control-next-icon"></span>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* col-sm-4 */}

						<div class="col-sm-8">
							<div class="tile">
								<div class="wrapper">
									<div class="header">
										<Info title="BostonHacks Two" />
									</div>
									<div class="dates">
										<div className="col-sm-3">
											<strong>Attendees</strong>
											<div style={{ paddingLeft: "40%" }}>
												<Info attendees="300" />
											</div>
											<span></span>
										</div>

										<div className="col-sm-9">
											<strong>Prizes</strong>
											<Info prizes="Netflix and Chill, Ostrich Pillows, Amazon Echos, Cash, 
											Apple Watches, Laptops, AWS Credit, Amazon Echos, Echo Dots" />
											<span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-9">
											<strong>Sponsors</strong>
											<Info sponsors="Bloomberg, Button, Citi, IsraelTechChallenge, 
															Libery Mutual, Recovery Centers of America, SAMHSA, Twilio" />
											<span></span>
										</div>

										<div className="col-sm-3">
										<strong>Prizes</strong>
											See the projects on <a href="https://bostonhacks-s-2017.devpost.com/">Devpost!</a>
											<span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-12">
											<strong>Organizers</strong>
											<Info organizers="Lucas Watson, Anna Goncharova, Brandon Ng, Mark Bestavros, Katie Quirk, 
											Rudhra Raveendran, Ken Garber, Sean Zhang, Charles Ma, Warren Partridge, Mariana Garces Dematté, 
											Nicolas Hinderling, Alexandra Miller-Browne, Jack Knollmeyer, Sean Smith" />
											<span></span>
										</div>
									</div>
								</div> {/*wrapper*/}
							</div>{/*tile*/}
							<hr />
						</div>{/* col-sm-8 */}						
					</div> {/* row */}

					<div class="row">
						<div class="col-sm-4">
							<div class="tile">
								<div class="wrapper">
									<div id="demo2015" class="carousel slide" data-ride="carousel">
										{/* <!-- Indicators --> */}
										<ul class="carousel-indicators">
											<li data-target="#demo2015" data-slide-to="0" ></li>
											<li data-target="#demo2015" data-slide-to="1"></li>
											<li data-target="#demo2015" data-slide-to="2"></li>
										</ul>

										{/* <!-- The slideshow --> */}
										<div class="carousel-inner">
											<div class="carousel-item active">
												<img class="d-block w-100" src={location_fall_2015} alt="location_fall_2015" />
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={highlight_fall_2015} alt="highlight_fall_2015"  />
											</div>
											<div class="carousel-item">
												<img class="d-block w-100" src={organizers_2015} alt="organizers_2015" />
											</div>
										</div>

										{/* <!-- Left and right controls --> */}
										<a class="carousel-control-prev" href="#demo2015" data-slide="prev">
											<span class="carousel-control-prev-icon"></span>
										</a>
										<a class="carousel-control-next" href="#demo2015" data-slide="next">
											<span class="carousel-control-next-icon"></span>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* col-sm-4 */}

						<div class="col-sm-8">
							<div class="tile">
								<div class="wrapper">
									<div class="header">
										<Info title="BostonHacks One" />
									</div>
									<div class="dates">
										<div className="col-sm-3">
											<strong>Attendees</strong>
											<div style={{ paddingLeft: "40%" }}>
												<Info attendees="350" />
											</div>
											<span></span>
										</div>

										<div className="col-sm-9">
											<strong>Prizes</strong>
											<Info prizes="Trip to Disney, Dell Tablets, Hoverboards, 200 Chipotle Burritos, 
														NewEgg.com Giftcards, Microsoft Surface Pro 3, Cash, 
														Startup Grants + Mentorship, Drones, 1TB Hard Drives, Trip to Tech Conference" />
											<span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-9">
											<strong>Sponsors</strong>
											<Info sponsors="Google, Liberty Mutual, Citibank, GE, AT&T, Epic Systems, AutoDesk,
											 Wolfram, HP, Microsoft, Mitre, Hitachi Data Systems, Thiel Foundation, Bloomberg, Twilio, 
											 Kayak, CapitalOne" />
											<span></span>
										</div>

										<div className="col-sm-3">
											<strong>Prizes</strong>
											See the projects on <a href="https://bostonhacks.devpost.com/">Devpost!</a>
											<span></span>
										</div>
									</div>

									<div class="dates">
										<div className="col-sm-12">
											<strong>Organizers</strong>
											<Info organizers="Nicolas Hinderling, Alexandra Miller-Browne, Jack Knollmeyer, 
											Huy Le, Sean Smith, Sean Zhang, Mark Bestavros, Dan Gorelick" />
											<span></span>
										</div>
									</div>
								</div> {/*wrapper*/}
							</div>{/*tile*/}
							<hr />
						</div>{/* col-sm-8 */}						
					</div> {/* row */}		
				</div> {/* container-fluid */}
			</div>
		)
	}
}

export default Home;

