import express from 'express';
import {MongoClient, ObjectID} from 'mongodb';
import assert from 'assert';
import config from '../config';

let db;

MongoClient.connect(config.mongodbUri, (err, dbc) =>  {
  assert.equal(null, err);
  db = dbc;
});

const router = express.Router();

router.get('/contests',(req,res) => {
  let contests = {};
  db.collection('contests').find({})
  .project({
    categoryName: 1,
    contestName: 1
  })
  .each((err, contest) => {
    assert.equal(null, err);
    if(!contest) {
      res.send({contests});
      return;
    }
    contests[contest._id] = contest;
  });
});

router.get('/contest/:contestId',(req,res) => {
  db.collection('contests')
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then(contest => res.send(contest))
    .catch(console.error);
});

router.get('/names',(req,res) => {
  let names = {};
  db.collection('names').find({})
  .project({
    name: 1
  })
  .each((err, name) => {
    assert.equal(null, err);
    if(!name) {
      res.send({names});
      return;
    }
    names[name._id] = name;
  });
});

router.get('/names/:nameIds',(req,res) => {
  const nameIds = req.params.nameIds.split(',').map(ObjectID);
  let names = {};
  db.collection('names').find({ _id: { $in: nameIds }})
  .each((err, name) => {
    assert.equal(null, err);
    if(!name) {
      res.send({names});
      return;
    }
    names[name._id] = name;
  });
});

export default router;
