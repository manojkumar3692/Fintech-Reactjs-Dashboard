import React,{PureComponent} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import "./Dashboard.css"
class Dashboard extends PureComponent {
	constructor(props) {
		super(props)
	}



	render() {
		return (
			<section className="dashboard">
				<div>
					<h1>Your Itenary & Payment Details</h1>
				</div>
				<Paper zDepth={1} className="dashboard__board" >
					<Row>
						<Col xs={4}>
							<div className="dashboard__board--outline">
								<div className="dashboard__board--image">

								</div>
								<div className="dashboard__board--details">
									<h1>Amount Remaining : 10,202</h1>
									<h2>*Next EMI on 5/4/18</h2>
								</div>
								<div className="dashboard__board--action">

									<RaisedButton fullWidth={true} primary={true} label="MAKE PAYMENT"/>

								</div>
							</div>
						</Col>
					</Row>
				</Paper>

			</section>
		)
	}
}

export default Dashboard