import React,{PureComponent} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./Travel.css";
import "../FligthSelection/flightselection.scss";
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import TravelAPI from "./TravelAPI";
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
			// let obj = {
			// 	name:'Viran',
			// 	amount:'5000',
			// 	duration:'12',
			// 	fee:'5200'
			// }
			// TravelAPI.smsApi(obj)
			// 	.then((res) => {
			// 		this.props.history.push('/appDashboard/confirmation')
			// 	})
			// 	.catch((err) => {
			// 		alert('err in sms gateway')
			// 	})
			this.props.history.push('/appDashboard/confirmation')
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
					message="Please wait we are processing"
					autoHideDuration={4000}
					onRequestClose={this.handleRequestClose}
				/>
				<div className="bookingDetails__heading">
					<h1>Your Customized Travel Wallet</h1>
				</div>

				<div className="bookingDetails__container">

					<div className="flightselection__container">
					</div>


				</div>

				<div className="bookingDetails__emi">

					<h1>Select you standard Travel Now options from Travel Now</h1>
					<ul>
						<li>
							<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
								<RadioButton
									value="PREMIUM"
									label="Travel Assist Master"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
							<h1>Travel Now Assist Master Processing Fee upto 12 months @ 8%</h1>
							<div className="bookingDetails__emi--amount">
								₹5,124/month
							</div>
						</li>
						<li>
							<RadioButtonGroup name="shipSpeed1" defaultSelected="not_light">
								<RadioButton
									value="STANDARD"
									label="Travel Assist Super"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
							<h1>Travel Now Assist Super Processing Fee upto 6 months @ 6%</h1>
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

			</section>

		)
	}
}

export default BookingDetails