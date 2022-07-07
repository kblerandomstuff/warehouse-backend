const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

recordRoutes.route('/').get(async function (req, res) {
    res.send('api working')
});
recordRoutes.route('/test').get(function(req, res){
    console.log(req.query.name);
    res.send('Response send to client:'+req.query.name);

});

// This section will help you get a list of all the records.
recordRoutes.route('/anime/oid').get(function (req, res) {
    const dbConnect = dbo.getDb();
    let foid = req.query.value;
    console.log(req.query.value);
    var mongo = require('mongodb');
    let err_occ=false
    try{
        var o_id = new mongo.ObjectID(foid);
    } catch (err){
        res.send(JSON.stringify({"error":"oid not valid"}))
        err_occ=true
    };
    if (err_occ==false){
        dbConnect
            .collection('aniinfo')
            .find({"_id":o_id})
            .limit(1)
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(result);
                }
            });
    }

});

// This section will help you get a list of all the records.
recordRoutes.route('/testdb1').get(function (req, res) {
    const dbConnect = dbo.getDb1();
    let foid = req.query.value;
    console.log(req.query.value);
    var mongo = require('mongodb');
    let err_occ=false

    if (err_occ==false){
        dbConnect
            .collection('aniinfo')
            .find({})
            .limit(1)
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(result);
                }
            });
    }

});
// This section will help you create a new record.
/*
recordRoutes.route('/listings/recordSwipe').post(function (req, res) {
    const dbConnect = dbo.getDb();
    const matchDocument = {
        listing_id: req.body.id,
        last_modified: new Date(),
        session_id: req.body.session_id,
        direction: req.body.direction,
    };

    dbConnect
        .collection('matches')
        .insertOne(matchDocument, function (err, result) {
            if (err) {
                res.status(400).send('Error inserting matches!');
            } else {
                console.log(`Added a new match with id ${result.insertedId}`);
                res.status(204).send();
            }
        });
});

// This section will help you update a record by id.
recordRoutes.route('/listings/updateLike').post(function (req, res) {
    const dbConnect = dbo.getDb();
    const listingQuery = { _id: req.body.id };
    const updates = {
        $inc: {
            likes: 1,
        },
    };

    dbConnect
        .collection('listingsAndReviews')
        .updateOne(listingQuery, updates, function (err, _result) {
            if (err) {
                res
                    .status(400)
                    .send(`Error updating likes on listing with id ${listingQuery.id}!`);
            } else {
                console.log('1 document updated');
            }
        });
});

// This section will help you delete a record.
recordRoutes.route('/listings/delete/:id').delete((req, res) => {
    const dbConnect = dbo.getDb();
    const listingQuery = { listing_id: req.body.id };

    dbConnect
        .collection('listingsAndReviews')
        .deleteOne(listingQuery, function (err, _result) {
            if (err) {
                res
                    .status(400)
                    .send(`Error deleting listing with id ${listingQuery.listing_id}!`);
            } else {
                console.log('1 document deleted');
            }
        });
});

 */

module.exports = recordRoutes;
