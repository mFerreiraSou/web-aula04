const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const db_host = 'localhost';
const db_port = 27017;
const db_db = 'frases';
const mongoURI = mongodb:\/\/${db_host}:${db_port}/${db_db}';

mongoose.connect(mongoURI, {useNewUrlParser: true});

app.get('/', (req, res) => {

})

app.get('/frases', (req, res) =>{
	res.status(201).send();
})

app.post('/frases', (req, res) =>{
	res.status(201).send();
})


const port = 8080;
app.listen(port, (err) => {
	if (err) {
		console.log("Erro na aplicação");
	}
	console.log('Aplicação escultando na porta: ${port}');
})