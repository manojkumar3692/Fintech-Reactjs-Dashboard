import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import FlightSelection from "./container/FligthSelection/FlightSelection";
import { Switch, Route } from 'react-router-dom'
import MarketingPage from "./container/Marketing/Marketing";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookingDetails from "./container/BookingDetails/BookingDetails";
import Dashboard from "./container/Dashboard/Dashboard";
ReactDOM.render(
	<section className="parentContainer">
		<MuiThemeProvider>
	<BrowserRouter >
		<Switch>
			<Route exact path='/' render={props => <MarketingPage {...props}/>}     />
			<Route path='/flightSelection' component={FlightSelection}/>
			<Route path='/booking-details' component={BookingDetails}/>
			<Route path='/dashboard' component={Dashboard}/>

		</Switch>
	</BrowserRouter>
		</MuiThemeProvider>
	</section>
	, document.getElementById('root'));
registerServiceWorker();
