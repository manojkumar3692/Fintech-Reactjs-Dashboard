import axios from 'axios';


export default  {

	smsApi(obj) {
		return new Promise(function(resolve,reject) {
			axios.post('http://localhost:4567/notify/travel',obj)
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
					reject(err)
				})
		})
	}

}