import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MarketingPage from "../Marketing/Marketing";
import "./flightselection.scss";
import {airfareList} from "../../Util/FlightSearchDetails";
import {DateFormat} from "../../Util/DateExtension";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
export class FlightSelection extends MarketingPage {
	constructor(props) {
		super(props)
		this.state = {};
		this.state.airFare = airfareList;
		this.state.confirmBooking =false;
		console.log(this.state.airFare)
 	}

	handleOpen = () => {
		this.setState({confirmBooking: true});
	};

	handleClose = () => {
		this.setState({confirmBooking: false});
	};

	onConfirm = () => {
		this.props.history.push('/booking-details')
	};


 	render() {
	    const actions = [
		    <FlatButton
			    label="Cancel"
			    primary={true}
			    onClick={this.handleClose}
		    />,
		    <FlatButton
			    label="Submit"
			    primary={true}
			    keyboardFocused={true}
			    onClick={this.onConfirm}
		    />,
	    ];

		const data = this.state.airFare[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items

		return (

			<section className="flightselection">

				<Dialog
					title="Confirmation Page"
					actions={actions}
					modal={false}
					open={this.state.confirmBooking}
					onRequestClose={this.handleClose}
				>
					<section className="flightselection__confirmContainer">
						<h3>*Fill All Details Carefully ( Booking Details )</h3>
						<div className="flightselection__confirmContainer--details">
							<TextField
								hintText="First Name"
							/><br />
							<TextField
								hintText="Last Name"
							/><br />
							<TextField
								hintText="Pan Number"
							/><br />
							<TextField
								hintText="Aadhar Number"
							/><br />
							<TextField
								hintText="Mobile Number"
							/><br />
							<TextField
								hintText="Passport Number"
							/><br />
						</div>

					</section>
				</Dialog>
				{
					data.map((item,index) => {

						return (
							<div className="flightselection__container" key={'mykey' + index}>
								<Row>
									<Col xs={10}>
										<div className="flightselection__departure">

											<Row>
												<Col xs={3} className="flightselection__departure--logo">
													<h1>{item.FlightDetails[0].AirlineName}</h1>
													<img src={require('../../assets/images/Singapore_Airlines.svg')}/>
												</Col>
												<Col xs={9} className="flightselection__departure--details">
													<Row middle="xs" center="xs" style={{height:'100%'}}>
														<Col>
															<ul>
																<li>
																	<div className="flightselection__departure--timeInfo">
																		<h1>{item.FlightDetails[0].OriginAirportCity}</h1><span>{new Date(item.FlightDetails[0].DepartureDateTime).format(DateFormat.time)}</span>
																		<h2>Chennai</h2>
																	</div>

																</li>
																<li>
																	<div>7h 05m</div>
																	<div className="flightselection__departure--separator"></div>
																</li>
																<li>
																	<div className="flightselection__departure--timeInfo">
																		<h1>SIN</h1><span>{new Date(item.FlightDetails[0].ArrivalDateTime).format(DateFormat.time)}</span>
																		<h2>{item.FlightDetails[0].DestinationAirportCity}</h2>
																	</div>
																</li>
															</ul>
														</Col>
													</Row>
												</Col>
											</Row>

										</div>
										<div className="flightselection__departure">

											<Row>
												<Col xs={3} className="flightselection__departure--logo">
													<h1>Singapore Airline</h1>
													<img src={require('../../assets/images/Malaysian Airline.png')}/>
												</Col>
												<Col xs={9} className="flightselection__departure--details">
													<Row middle="xs" center="xs" style={{height:'100%'}}>
														<Col>
															<ul>
																<li>
																	<div className="flightselection__departure--timeInfo">
																		<h1>SIN</h1><span>{new Date(item.FlightDetails[0].DepartureDateTime).format(DateFormat.time)}</span>
																		<h2>{item.FlightDetails[0].DestinationAirportCity}</h2>
																	</div>

																</li>
																<li>
																	<div>7h 05m</div>
																	<div className="flightselection__departure--separator"></div>
																</li>
																<li>
																	<div className="flightselection__departure--timeInfo">
																		<h1>MAA</h1><span>{new Date(item.FlightDetails[0].DepartureDateTime).format(DateFormat.time)}</span>
																		<h2>{item.FlightDetails[0].OriginAirportCity}</h2>
																	</div>
																</li>
															</ul>
														</Col>
													</Row>
												</Col>
											</Row>

										</div>
									</Col>

									<Col xs={2} className="flightselection__actionContainer">
										<Row middle="xs" style={{height:'100%'}}>
											<Col xs={12}>
												<div className="flightselection__action">
													<h1>Rs {item.FareDescription.PaxFareDetails[0].TotalTaxAmount}</h1>
													<RaisedButton onClick={this.handleOpen} label="Book Now" primary={true}  />
												</div>
											</Col>
										</Row>
									</Col>

								</Row>
							</div>

						)

					})
				}

			</section>
		)
    }


}

export default FlightSelection