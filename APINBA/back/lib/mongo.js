const { MongoClient, ObjectId } = require('mongodb');
const {config} = require( '../config/index');

const USER = config.DB_USER;
const PASSWORD = config.DB_PASSWORD;
const DBNAME = config.DB_NAME;
const HOST = config.DB_HOST;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/myFirstDatabase?retryWrites=true&w=majority`;

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
        this.dbName = DBNAME;
    }

    connect() {
        if (!MongoLib.connection){
            MongoLib.connection = new Promise ((resolve, reject) => {
                this.client.connect( err => {
                    if (err) {
                        reject("error en la conexión con la BBDD ", err);
                    }
                    console.log('Conectado a la BBDD');
                    resolve(this.client.db(this.dbName));
                })
            })
        }

        return MongoLib.connection;
    }

    getFavoritos(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        })
    }

    
}

module.exports = MongoLib;