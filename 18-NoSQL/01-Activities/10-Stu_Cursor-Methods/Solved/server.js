const express = require('express');
const { MongoClient } = require('mongodb');


const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'numbersDB';

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    db.collection('numberList').deleteMany({});
    db.collection('numberList').insertMany(data)
      .then(res => console.log('Data inserted'))
      .catch(err => {
        if (err) return console.log(err);
      });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());

// Get request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.collection('numberList')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find()
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    .toArray()
    .then(results => res.send(results))
    .catch(err => {
      if (err) throw err;
    });
});
