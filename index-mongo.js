const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const db_host = 'localhost';
const db_port = 27017;
const db_db = 'frases';
const mongoURI = `mongodb://${db_host}:${db_port}/${db_db}`;

mongoose.connect(mongoURI, { useNewUrlParser: true });

const Frase = require('./models/Frase');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/frases', (req, res) => {
  res.status(200).send('Lista de frases');
});

app.post('/frases', (req, res) => {
  let frase = {
    autor: req.body.autor,
    frase: req.body.frase
  };

  Frase.create(frase)
    .then((f) => {
      res.status(201).send(f);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

app.delete('/frases/:id', (req, res) => {
  let id = req.params.id;

  Frase.findByIdAndDelete(id)
    .then(() => res.status(200).send())
    .catch(() => res.status(404).send());
});

app.put('/frases/:id', (req, res) => {
    let id = req.params.id;
      
    Frase.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedFrase) => {
        if (!updatedFrase) {
            return res.status(404).send();
        }
        res.status(200).send(updatedFrase);
        })
        .catch((err) => {
        console.error(err);
        res.status(500).send();
        });
    });

const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.log("Erro na aplicação");
  }
  console.log(`Aplicação escutando na porta: ${port}`);
});