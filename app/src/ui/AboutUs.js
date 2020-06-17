import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AboutUs = () => {
	return(
		<>
			<div className="sfooter-content">
				<main className="my-5 text-white">
					<div className="container-fluid text-center text-md-left">
						<div className="row">

							<div className="col-md-6">
								<h1>About Us</h1>
							</div>

							<div className="col-md-6">
								<Card className="bg-primary border-0 rounded-0 text-white text-shadow-dark">
									<Card.Body>
										<h4>We specialize in extraordinary meow experiences.</h4>
										<hr />
											<p>Bring to the table win-win survival strategies to ensure proactive domination. At
												the end of the day, going forward, a new normal that has evolved from generation X
												is on the runway heading towards a streamlined cloud solution. User generated
												content in real-time will have multiple touchpoints for offshoring.</p>
											<p>Scratch the furniture put butt in owner's face rub whiskers on bare skin act
												innocent or roll over and sun my belly brown cats with pink ears or step on your
												keyboard while you're gaming and then turn in a circle meowwww. If it fits, i sits
												mark territory, but scamper stare at ceiling i shredded your linens for you kick up
												litter yet curl into a furry donut. Leave dead animals as gifts lounge in doorway
												for ooh, are those your $250 dollar sandals?</p>
											<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta
												test. Override the digital divide with additional clickthroughs from DevOps.
												Nanotechnology immersion along the information highway will close the loop on
												focusing solely on the bottom line.</p>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)

};