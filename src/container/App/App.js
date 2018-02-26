import React, {Component} from 'react';

import FlightSelection from "../FligthSelection/FlightSelection";
import {Switch, Route} from 'react-router-dom'
import MarketingPage from "../Marketing/Marketing";
import BookingDetails from "../BookingDetails/BookingDetails";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' render={props => <MarketingPage {...props}/>}/>
				<Route path='/flightSelection' component={FlightSelection}/>
				<Route path='/booking-details' component={BookingDetails}/>
				<Route path='/dashboard' component={Dashboard}/>
			</Switch>
		)
	}
}

export default  App;