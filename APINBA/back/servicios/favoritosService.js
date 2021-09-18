const MongoLib = require('../lib/mongo');

class favoritosService {

    constructor(){
        this.collection = 'favoritos';
        this.mongoDB = new MongoLib();
    }

    async getFavoritos({tags}) {
        const query = tags ;
        const favoritos = await this.mongoDB.getFavoritos(this.collection, query);
        return favoritos || [];
    }

    
    
}

module.exports = favoritosService