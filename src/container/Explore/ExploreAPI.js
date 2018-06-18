import axios from 'axios';


export default  {

	submitForm(obj) {
		return new Promise(function(resolve,reject) {
			axios.post('http://localhost:4567/profile',obj)
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
					reject(err)
				})
		})
	}

}