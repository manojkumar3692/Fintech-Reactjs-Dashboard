import React, {Component} from 'react';

import FlightSelection from "../FligthSelection/FlightSelection";
import {Switch, Route} from 'react-router-dom'
import MarketingPage from "../Marketing/Marketing";
import BookingDetails from "../BookingDetails/BookingDetails";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import AppDashboard from "../AppDashboard/AppDashboard";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' render={props => <Login {...props}/>}/>
				<Route path='/appDashboard' component={AppDashboard}/>
			</Switch>
		)
	}
}

export default  App;