const axios = require('axios')


const getWelcomeFromApi = async ()=>{

	try{
		const response = await axios.get('/api/hello')
		return await response.data
	}catch(error) {
		return {
			error
		}
	}
}

export {getWelcomeFromApi}