import axios from 'axios';
import React from 'react';
import {airfareList} from "../../Util/FlightSearchDetails";
export default  {

	checkAvailable(obj) {
		return new Promise(function(resolve,reject) {
			let res = airfareList;
			let error= 'Someissue with api';
			if(obj !== undefined) {
				resolve(res);
			}else {
				reject(error);
			}
		})
	}

}