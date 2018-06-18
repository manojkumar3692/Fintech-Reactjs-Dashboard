import React,{PureComponent} from "react";
import Header from "../../common/Header/Header";
import "./AppDashboard.css";
import {Switch, Route} from 'react-router-dom';
import FlightSelection from "../FligthSelection/FlightSelection";
import BookingDetails from "../BookingDetails/BookingDetails";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import MarketingPage from "../Marketing/Marketing";
import Explore from "../Explore/Explore";
import Travel from "../Travel/Travel";
import Confirmation from "../Confirmation/Confirmation";
import Medical from "../Medical/Medical";
class AppDashboard extends PureComponent {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<section className="appDashboard">
                <Header/>
                <div className="appDashboardLeft">
                    <div className="profileDashboard">

                        <img src={require("../../assets/images/sin.jpg")}/>
                        <h1>Manoj Kumar S</h1>

                    </div>
                    <div className="appMenu">
                        <ul>
                            <li><i className="ion-network"></i>Search</li>
                            <li><i className="ion-bug"></i>Book</li>
	                        <li><i className="ion-network"></i>Travel</li>
	                        <li><i className="ion-bug"></i>Credit</li>
	                        <li><i className="ion-network"></i>Upload Document</li>
	                        <li><i className="ion-bug"></i>Support</li>
                        </ul>
                    </div>
                </div>
                <div className="appDashboardRight">
	                <Route path="/appDashboard/search" component={MarketingPage}/>
	                <Route path="/appDashboard/selection" component={FlightSelection}/>
	                <Route path="/appDashboard/confirm" component={BookingDetails}/>
	                <Route path="/appDashboard/explore" component={Explore}/>
	                <Route path="/appDashboard/travel" component={Travel}/>
	                <Route path="/appDashboard/confirmation" component={Confirmation}/>
	                <Route path="/appDashboard/medical" component={Medical}/>
                </div>
            </section>
		)
	}
}

export default AppDashboard;
