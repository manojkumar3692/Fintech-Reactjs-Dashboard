import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FlightSelection from "./container/FligthSelection/FlightSelection";
import { Switch, Route } from 'react-router-dom'
import MarketingPage from "./container/Marketing/Marketing";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookingDetails from "./container/BookingDetails/BookingDetails";
import Dashboard from "./container/Dashboard/Dashboard";
import App from "./container/App/App";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../src/store-index';

ReactDOM.render(
	<section className="parentContainer">
		<MuiThemeProvider>

	<BrowserRouter>
		<App/>
	</BrowserRouter>
		</MuiThemeProvider>
	</section>
	, document.getElementById('root'));
registerServiceWorker();
