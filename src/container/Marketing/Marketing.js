import React,{PureComponent} from "react";

import './marketing.scss';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';
import {airportList} from "../../AirportDetails/AirportList";
import {DateFormat} from "../../Util/DateExtension";
import MarketingService from "./MarketingService";



class MarketingPage extends PureComponent  {
	constructor(props) {
		super(props);
			this.state = {};
			this.state.departureValue = '';
			this.state.arrivalValue = '';
			this.state.startDate = null;
			this.state.endDate = null;
			this.state.allFare = [];
	}

	newDataSource = airportList.map(item => {
		return Object.assign({fullName:item.name},item)});

	dataSourceConfig = {
		text: 'fullName',
		value: 'iata'
	}

	__allFareFunction() {
		let data = this.state.allFare;
		return data;
	}


	_departureDetails(value) {
		console.log('dep',value)
		this.setState({depatureValue:value.iata})
	}

	_arrivalDetails(value) {
		console.log('arr',value)
		this.setState({arrivalValue:value.iata})
	}

	_startDateValue(event, date) {
		this.setState({startDate:date});
		console.log('startdate',new Date(this.state.startDate).format(DateFormat.indianDate))
	}

	_endDateValue(event, date) {
		this.setState({endDate:date});
		console.log('startdate',new Date(this.state.endDate).format(DateFormat.indianDate))
	}

	_searchBooking() {
		let obj = {
			"TripType": "R",
			"NoOfAdults": 1,
			"NoOfChilds": 0,
			"NoOfInfants": 0,
			"ClassType": "Economy",
			"OriginDestination": [
				{
					"Origin":this.state.departureValue,
					"Destination": this.state.array,
					"TravelDate": this.state.startDate
				},
				{
					"Origin": this.state.arrivalValue,
					"Destination": this.state.departureValue,
					"TravelDate":this.state.endDate
				}
			],
			"Currency": "INR"
		}
		MarketingService.checkAvailable(obj)
			.then((res)=> {
				let data = res
				this.setState({allFare:data})
				console.log('Sucess',res);
				console.log(this.props)
				this.props.history.push('/flightSelection')
			})
			.catch((err) => {
				console.log('Fetching Err',err)
			})
	}
	render() {
		return (
			<section className="marketing">
				<h1>{this.props.component}</h1>
				<div className="marketing__firstsection">
					<div className="marketing__firstsection--overlay">
					<Row middle="xs" className="marketing__firstsection--fullHeight">
						<Col xs={12} >
							<div className="marketing__search">
							<div className="marketing__search--heading">
								<h1>Helping travelers turn their dreams into reality</h1>
								<p>TravelNow Pay Monthly enables you to buy now but pay later with monthly payments offered at the industry’s lowest rates.</p>
							</div>
							<div className="marketing__filter">
								<Row middle="xs">
									<Col xs={4} className='marketing__search--each'>
										<label>From</label>
										<div>
											<AutoComplete
												dataSourceConfig={this.dataSourceConfig}
												hintText="Type anything"
												dataSource={this.newDataSource}
												filter={AutoComplete.caseInsensitiveFilter}

												hintText="Enter departure airport"
												hintStyle={{color:"#d3d3d3"}}
												inputStyle={{color:"#fff"}}
												onNewRequest={this._departureDetails.bind(this)}
											/>
										</div>
									</Col>
									<Col xs={4} className='marketing__search--each'>
										<label>To</label>
										<div>
											<AutoComplete
												dataSourceConfig={this.dataSourceConfig}
												hintText="Type anything"
												dataSource={this.newDataSource}
												hintText="Enter arrival airport"
												hintStyle={{color:"#d3d3d3"}}
												inputStyle={{color:"#fff"}}
												onNewRequest={this._arrivalDetails.bind(this)}
												// listStyle={{width:'150px'}}
												// style={{width:'150px'}}
											/>
										</div>
									</Col>
									<Col xs className='marketing__search--each'>
										<label>Depart</label>
										<div>
											<DatePicker onChange={this._startDateValue.bind(this)} value={this.state.startDate} autoOk={true} inputStyle={{color:"#fff"}} textFieldStyle={{width:'100px'}} hintText="Landscape Dialog" mode="landscape" />
										</div>
									</Col>
									<Col xs className='marketing__search--each'>
										<label>Return</label>
										<div>
											<DatePicker onChange={this._endDateValue.bind(this)} value={this.state.endDate} autoOk={true} inputStyle={{color:"#fff"}} textFieldStyle={{width:'100px'}} hintText="Landscape Dialog" mode="landscape" />
										</div>
									</Col>
									<Col xs className='marketing__search--action'>
										<RaisedButton onClick={this._searchBooking.bind(this)} fullWidth={true} primary={true} label="Search"/>
										<RaisedButton onClick={this.props.changePage} fullWidth={true} primary={true} label="Search"/>

									</Col>
								</Row>
							</div>
							</div>
						</Col>
					</Row>
					</div>
				</div>
			</section>
		)
	}
}

export default MarketingPage