var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017/db_gurustat', (err,db) => {
		if(err) {
			return console.log(err);
		}
		closure(db);
	});
}

let response = {
	status: 200,
	message: null,
	data: []
}

var sendError = (err, res) => {
	response.status = 501;
	response.message = typeof err == "object" ? err.message : err;
	res.status(501).json(response);
}

router.get('/pgee2017',(req,res)=>{
    connection((db)=>{
        var database = db.db('db_gurustat');
        database.collection('pgee2017').find().toArray().then((pgee2017)=>{
            response.data = pgee2017;
            res.json(response);
        })
    })
})﻿

module.exports = router;