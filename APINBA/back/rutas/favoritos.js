const express = require('express');

const FavoritosService = require('../servicios/favoritosService');

function favoritosAPI(app) {
    const router = express.Router();
    app.use('/api/favoritos', router);
  // app.use(express.static('dist/practicaAngular3'))

    const favoritosService = new FavoritosService();

    router.get('/', async function (req, res, next) {
        const tags = req.query;

        try {
            const favoritos = await favoritosService.getFavoritos({tags});
            res.status(200).json(
                {
                    data: favoritos,
                    message: 'favoritos devueltos con éxito'
                }
            )
        } catch (err){
            next(err);
        }
    })

}
   module.exports = favoritosAPI;
   
   

   
   
  