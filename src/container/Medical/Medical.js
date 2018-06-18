import React,{PureComponent} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./Medical.css";
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
		this.state.onMedical = false;
	}

	handleRequestClose = () => {
		this.setState({
			snackBar: false,
		});
	};

	confirmItenary() {
		this.setState({snackBar:true,onMedical:true});
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
					message="Your request placed successfully "
					autoHideDuration={4000}
					onRequestClose={this.handleRequestClose}
				/>
				<div className="bookingDetails__heading">
					<h1>Your Customized Medical Wallet</h1>
				</div>

				<div className="bookingDetails__container">

					<div className="flightselection__container">
					</div>


				</div>

				<div className="bookingDetails__emi">

					<h1>Select you standard plans options from niyo</h1>
					<ul>
						<li>
							<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
								<RadioButton
									value="PREMIUM"
									label="Medical Assist Master"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
							<h1>Niyo Travel Assist Master Processing Fee upto 12 months @ 8%</h1>
							<div className="bookingDetails__emi--amount">
								₹5,124/month
							</div>
						</li>
						<li>
							<RadioButtonGroup name="shipSpeed1" defaultSelected="not_light">
								<RadioButton
									value="STANDARD"
									label="Medical Assist Super"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
							<h1>Niyo Travel Assist Master Processing Fee upto 12 months @ 6%</h1>
							<div className="bookingDetails__emi--amount">
								₹3,456/month
							</div>
						</li>

					</ul>
				</div>

				<div className="bookingDetails__action">

					<RaisedButton label="Confirm Booking" primary={true} onClick={this.confirmItenary.bind(this)} />
					<h1>*EMI starts from the 5th of your travel date</h1>
				</div>
				<div style={{textAlign:'center'}}>

				{
					this.state.onMedical && <RaisedButton label="Upload Document" type="file"/>
				}
				</div>
				<div>

				</div>

			</section>

		)
	}
}

export default BookingDetails