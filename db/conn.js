const { MongoClient } = require('mongodb');
const connectionString = process.env.ATLAS_URI_WH;
const connectionString1 = process.env.ATLAS_URI_KRS;
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const client1 = new MongoClient(connectionString1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let dbConnection;
let dbConnection1;
module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db('warehouse');
            console.log('Successfully connected to MongoDB.');

            return callback();
        });
    },
    connectToServer1: function (callback) {
        client1.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection1 = db.db('warehouse');
            console.log('Successfully connected to MongoDB.');

            return callback();
        });
    },
    getDb: function () {
        return dbConnection;
    },
    getDb1: function () {
        return dbConnection1;
    },
};