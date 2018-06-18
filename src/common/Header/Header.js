import React,{PureComponent} from  'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom'
import "./Header.css";
export default class Header extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="header">
				<Row>
					<Col xs={8}>
						<Link style={{textDecoration:'none'}} to={'/appDashboard/explore'}><h1>Travel Now</h1></Link>
					</Col>
					<Col xs={4}>
						<Link style={{textDecoration:'none'}} to={'/'}><h2>Logout</h2></Link>
					</Col>
				</Row>
			</div>
		)
	}
}