import React,{PureComponent} from "react";
import LoginStyle from './Login.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import TextFiled from "../../common/TextField/TextField";
import Button from "../../common/Button/Button";
class Login extends PureComponent {
	constructor(props) {
		super(props)
	}
	onSuccessLogin(event) {
		this.props.history.push('/appDashboard/explore');
	}

	render() {
		return (
			<div className="login">

				<Row middle="xs" className="loginOuter">
					<Col xs={12}>
						<Paper className="loginContainer" zDepth={5}>
							<h1>Account Login</h1>
							<form onSubmit={this.onSuccessLogin.bind(this)}>
							<TextFiled required  id="username" required placeholderText="Username" label="Username"/>
							<TextFiled  required  id="password" required placeholderText="Password" label="Password"/>
							<Button validate={this.onSuccessLogin.bind(this)} type="button" buttonLabel="Submit"/>
							</form>
						</Paper>
					</Col>
				</Row>

			</div>
		)
	}
}

export default Login;
