import React,{PureComponent} from 'react';
import './Confirmation.css';
import RaisedButton from 'material-ui/RaisedButton';
export default class Confirmation extends PureComponent {
	constructor(props) {
		super(props)

	}

	componentDidMount() {

	}

	statePush() {
		this.props.history.push('/appDashboard/search')
	}
	render() {
		return (
			<div className="confirmation">
				<div className="confirmationImage">
					<img src={require('../../assets/images/success.png')}/>
				</div>
				<div className="details">
					<h1>Wolla ! Congratulations cash transfered to wallet</h1>
					<h2>Hey we got best deals for flight try booking from us</h2>
					<RaisedButton primary={true} label="Book Flight Ticket" onClick={this.statePush.bind(this)}></RaisedButton>
				</div>
			</div>
		)
	}
}