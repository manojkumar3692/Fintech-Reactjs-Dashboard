import React,{PureComponent} from "react";
import Dialog from 'material-ui/Dialog';
import './Explore.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../FligthSelection/flightselection.scss';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// Using an ES6 transpiler like Babel;
import Slider from 'react-rangeslider';
import ExploreAPI from "./ExploreAPI";
// To include the default styles
import 'react-rangeslider/lib/index.css'
const inputParsers = {
	date(input) {
		const [month, day, year] = input.split('/');
		return `${year}-${month}-${day}`;
	},
	uppercase(input) {
		return input.toUpperCase();
	},
	number(input) {
		return parseFloat(input);
	},
};
class Explore extends PureComponent  {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.volume = 0;
		this.state.year=1;
		this.state.departureValue = '';
		this.state.arrivalValue = '';
		this.state.startDate = null;
		this.state.endDate = null;
		this.state.allFare = [];
		this.state.confirmBooking =false;
		this.state.selectedOption = '';
	}

	handleOnChange = (value) => {
		this.setState({
			volume: value
		})
	}

	handleOnChangeYear = (value) => {
		this.setState({
			year: value
		})
	}

	handleOpen = () => {
		this.setState({confirmBooking: true});
	};

	handleClose = () => {
		this.setState({confirmBooking: false});
	};

	onConfirm = () => {
		if(this.state.selectedOption === 'Medical') {
			this.props.history.push('/appDashboard/medical')
		}else if (this.state.selectedOption === 'Travel') {
			this.props.history.push('/appDashboard/travel')
		}
		else {
			return false
		}
	};
	checkboxState(event) {
		console.log(event.target.value)
		this.setState({selectedOption:event.target.value})
	}

	handleSubmit(event) {
		console.log(event.target.value)
		debugger
		event.preventDefault();
		// let obj = {
		// 	firstName:document.getElementById('name').value,
		// 	monthlyNetPay:document.getElementById('MNP').value,
		// 	avgMonthlyBalance:document.getElementById('avgbal').value,
		// 	purpose:this.state.selectedOption.toUpperCase(),
		// 	utilization:"IMMEDIATE",
		// 	number:document.getElementById('mobile').value
		// }
		// ExploreAPI.submitForm(obj)
		// 	.then((res) => {
		// 		if(this.state.selectedOption === 'Medical') {
		// 			this.props.history.push('/appDashboard/medical')
		// 		}else if (this.state.selectedOption === 'Travel') {
		// 			this.props.history.push('/appDashboard/travel')
		// 		}
		// 		else {
		// 			return false
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		alert('Err')
		// 	})
		this.props.history.push('/appDashboard/travel')
	}
	render() {
		const actions = [

		];
		return (
			<section className="marketing">
				<h1>{this.props.component}</h1>
				<div className="marketing__firstsection">
					<div className="marketing__firstsection--overlay">
						<Row middle="xs" className="marketing__firstsection--fullHeight" style={{marginLeft:'0px',marginRight:'0px'}}>
							<Col xs={12} >
								<div className="marketing__search">
									<div className="marketing__search--heading">
										<h1>Helping travelers turn their dreams into reality</h1>
										<p>Travel Now Pay Monthly enables you to buy now but pay later with monthly payments offered at the industry’s lowest rates.</p>
									</div>
									<div className="exploreAction" onClick={this.handleOpen}>
										<h1>Explore Now</h1>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
				<Dialog
					title="Confirmation Page"
					actions={actions}
					modal={false}
					open={this.state.confirmBooking}
					onRequestClose={this.handleClose}
				>
					<section className="flightselection__confirmContainer">
						<h3 style={{marginBottom:'10px'}}>*Fill All Details Carefully ( Booking Details )</h3>
						<form onSubmit={this.handleSubmit.bind(this)}>
						<Row>
							<Col xs={6}>
								<div className="flightselection__confirmContainer--details">
									<div className="exploreForm">
										<h1>Enter Name</h1>
									<TextField
										id="name"
										name="name"
										hintText="Name"
										type="text"
										required
									/>
									</div>
									<br />
									<div className="exploreForm">
										<h1>Enter Email</h1>
										<TextField
											required
											name="email"
											hintText="Email"
											type="text"
										/>
									</div><br />
									<div className="exploreForm">
										<h1>Enter Mobile</h1>
										<TextField
											required
											id="mobile"
											name="mobile"
											hintText="Mobile Number"
											type="text"
										/>
									</div><br />
									<div className="exploreForm">
										<h1>Enter Average Monthly Balance</h1>
										<TextField
											required
											id="avgbal"
											name="avgbal"
											hintText="Average Monthly Balance"
											type="text"
										/>
									</div><br />
									<div className="exploreForm">
										<h1>Enter Monthly Pay</h1>
										<TextField
											required
											id="MNP"
											name="MNP"
											hintText="Enter Monthly Pay"
											type="text"
										/>
									</div><br/>
								</div>

							</Col>
							<Col xs={6}>
								<div className="flightselection__confirmContainer--details">
									<div style={{paddingBottom:'10px'}}>
									<h1 style={{fontSize:'14px',fontWeight:'400'}}>Select Amount Required</h1>
									<Slider
										tooltip={true}
										value={this.state.volume}
										orientation="horizontal"
										onChange={this.handleOnChange}
										labels={{ 0: 'Thousand',100: 'Lakh'}}
									/>
									</div>
										<br/>
									<div>
										<h1 style={{fontSize:'14px',fontWeight:'400'}}>Select Purpose</h1>
									<select onChange={this.checkboxState.bind(this)}>
										<option value="Personal">Personal</option>
										<option value="Marriage">Marriage</option>
										<option value="Medical">Medical</option>
										<option value="Travel">Travel</option>
									</select>
									</div>
									<br />
									<div>
										<h1 style={{fontSize:'14px',fontWeight:'400'}}>Tenure</h1>
									<Slider
										min={3}
										max={12}
										tooltip={true}
										value={this.state.year}
										orientation="horizontal"
										onChange={this.handleOnChangeYear}
										labels={{ 0: 'Months', 12: 'One Year'}}
									/>
									</div>
										<br/>
								</div>

							</Col>
						</Row>
							<Row>
								<FlatButton
									label="Cancel"
									primary={true}
									onClick={this.handleClose}
								/>,
								<FlatButton
									type="submit"
									label="Submit"
									primary={true}
									keyboardFocused={true}
								/>
							</Row>
						</form>
					</section>
				</Dialog>
			</section>
		)
	}
}

export default Explore