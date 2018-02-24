import React,{PureComponent} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./bookingDetails.scss";
import "../FligthSelection/flightselection.scss";
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
class BookingDetails extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {};
		this.state.snackBar = false;
	}

	handleRequestClose = () => {
		this.setState({
			snackBar: false,
		});
	};

	confirmItenary() {
		this.setState({snackBar:true});
		setTimeout(() => {
			this.props.history.push('/dashboard')
		},5000)
	}

	render() {

		const styles = {
			block: {
				maxWidth: 250,
			},
			radioButton: {
				marginBottom: 0,
				color:"#FFEB3B"
			},
		};
		return (
			<section className="bookingDetails">
				<Snackbar
					open={this.state.snackBar}
					message="Successfully Itenary Created"
					autoHideDuration={4000}
					onRequestClose={this.handleRequestClose}
				/>
				<div className="bookingDetails__heading">
					<h1>You selected flight details</h1>
				</div>

				<div className="bookingDetails__container">

					<div className="flightselection__container">
						<Row>
							<Col xs={10}>
								<div className="flightselection__departure">

									<Row>
										<Col xs={3} className="flightselection__departure--logo">
											<h1>Singapore Airline</h1>
											<img src={require('../../assets/images/Singapore_Airlines.svg')}/>
										</Col>
										<Col xs={9} className="flightselection__departure--details">
											<Row middle="xs" center="xs" style={{height:'100%'}}>
												<Col>
													<ul>
														<li>
															<div className="flightselection__departure--timeInfo">
																<h1>MAA</h1><span>01:54 am</span>
																<h2>Chennai</h2>
															</div>

														</li>
														<li>
															<div>7h 05m</div>
															<div className="flightselection__departure--separator"></div>
														</li>
														<li>
															<div className="flightselection__departure--timeInfo">
																<h1>SIN</h1><span>01:54 am</span>
																<h2>Singapore</h2>
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
											<img src={require('../../assets/images/Singapore_Airlines.svg')}/>
										</Col>
										<Col xs={9} className="flightselection__departure--details">
											<Row middle="xs" center="xs" style={{height:'100%'}}>
												<Col>
													<ul>
														<li>
															<div className="flightselection__departure--timeInfo">
																<h1>SIN</h1><span>13:54 am</span>
																<h2>Singapore</h2>
															</div>

														</li>
														<li>
															<div>7h 05m</div>
															<div className="flightselection__departure--separator"></div>
														</li>
														<li>
															<div className="flightselection__departure--timeInfo">
																<h1>MAA</h1><span>07:54 am</span>
																<h2>Chennai</h2>
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
											<h1>Total Amount </h1>
											<h1>Rs 12560</h1>
										</div>
									</Col>
								</Row>
							</Col>

						</Row>
					</div>


				</div>

				<div className="bookingDetails__emi">

					<h1>Select you standard emi options from travelNow</h1>
					<ul>
						<li>
							<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
								<RadioButton
									value="PREMIUM"
									label="Premium"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
							<h1>TRAVELNOW PREMIUM EMI PLANS : 3 EMIs @ 5% pa</h1>
							<div className="bookingDetails__emi--amount">
								₹5,124/month
							</div>
						</li>
						<li>
							<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
								<RadioButton
									value="STANDARD"
									label="Standard"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
							<h1>TRAVELNOW STANDARD EMI PLANS : 5 EMIs @ 9% pa</h1>
							<div className="bookingDetails__emi--amount">
								₹3,456/month
							</div>
						</li>
						<li>
							<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
								<RadioButton
									value="LOW"
									label="low"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
							<h1>TRAVELNOW LOW EMI PLANS : 9 EMIs @ 12% pa</h1>
							<div className="bookingDetails__emi--amount">
								₹1,576/month
							</div>
						</li>

					</ul>
				</div>

				<div className="bookingDetails__action">

					<RaisedButton label="Confirm Booking" primary={true} onClick={this.confirmItenary.bind(this)} />
					<h1>*EMI starts from the 5th of your travel date</h1>
				</div>

			</section>

		)
	}
}

export default BookingDetails