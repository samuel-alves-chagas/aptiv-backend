const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 5000;

const mongoose = require('mongoose');
const uri = `mongodb+srv://userAPPAptivC317:kIOS2babU9RvZrO9@cluster0.anxf3by.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);

mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'test');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

app.get('/', function(req, res){
  res.send('END POINT INVÁLIDO!');
});

app.use(bodyParser.json());

const routes = require('./routes/api');
app.use('/api', routes);

app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || port, () => {
    console.log('Servidor em execução na porta: '+ port);
});