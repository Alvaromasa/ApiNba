const express = require('express');
const app = express();
const {config} = require('./config/index');
const port = config.port;
const favoritosAPI = require('./rutas/favoritos');


app.use(express.json());


    app.use((req, res, next) => {
         res.header('Access-Control-Allow-Origin', '*');
         res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
         app.options('*', (req, res) => {
               res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
              res.send();
      });
   });
 
favoritosAPI(app);


app.listen(port, () => {
    console.log(`servidor escuchando en ${port}`);
})