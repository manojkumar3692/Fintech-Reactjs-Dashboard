import React from 'react';
import MarketingPage from "../container/Marketing/Marketing";


export class FlightSelection extends MarketingPage {
	constructor(props) {
		super(props)
		this.state = {};
		this.state.allDetails = this.__allFareFunction()
		console.log(this.state.allDetails)
 	}

 	render() {
		return (
			<h1>Fligth Selection Working</h1>
		)
    }


}

export default FlightSelection