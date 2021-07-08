import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { getWelcomeFromApi } from '../services/welcomeService'


const Home = ()=>{

    const [welcome, setWelcome] = useState('')

	useEffect(() => {
		getWelcomeFromApi()
		.then(data => {
			console.log(data)
			setWelcome(data.message)
		})
	}, [])
	
		
	return (
		<div className="App">
			<Header></Header>
			<div className="container mrgnbtm">
				Hello World from React Demo Application - By Rainan Miranda de Jesus
			</div>
			<footer>
				{welcome}
			</footer>
		</div>
	)

}

export { Home }