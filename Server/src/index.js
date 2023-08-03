const express = require('express');
const {Routes} = require('./routes')
const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());

app.use("/rickandmorty",Routes);  



app.listen(port, () => {
    console.log(`Server iniciado en el puerto ${port} `);
  });






