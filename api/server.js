const express = require('express');
const path = require('path');
const app = express()

port = process.env.APP_PORT || 80;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

// Serve api routes under /api
// Example
app.get('/api/hello', (request, response)=>{
	response.json({
		message: 'Hello World from api demo!'
	})
})

app.listen(port, () => {
		console.log(`Server listening on the port::${port}`);
});