const { MongoClient } = require('mongodb');
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Para rodar o Banco de Dados na máquina
const MONGO_DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'students'

let db = null;
const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      });
};

module.exports = connection;