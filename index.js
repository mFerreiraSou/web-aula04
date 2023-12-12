const express = require('express');
const app = express();

const frases = [
	{id: 1, autor: 'Maria Antonia', frase: "Frase da Maria"	},
	{id: 2, autor: 'Fernando Silva', frase: "Frase do Fernando"},
	{id: 3, autor: 'Beatriz Oliveira', frase: "Frase da Beatriz"},
	{id: 4, autor: 'Mauro Ronaldo', frase: "Frase do Mauro"}
];

app.get('/', (req, res) => {
	res.send("Prog. Web - Hello World.");
})

app.get('/frases', (req, res) => {
	res.send(frases);
})

app.post('/frases', (req, res) =>{
   frases.push(req.body);
    res.status(201).send()
})


const port = 8080;
app.listen(port, (err) => {
	if (err) {
		console.log("Erro na aplicação");
	}
	console.log('Aplicação escultando na porta: ${port}');
})