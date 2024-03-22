const { MongoClient } = require('mongodb');
//const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('promptr');
const userCollection = db.collection('user');
const scoreCollection = db.collection('submission');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(userName) {
  return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
  // Hash the password before we insert it into the database
  //const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    userName: userName,
    password: password,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addSubmission(submission) {
  ssubmissionCollection.insertOne(submission);
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addSubmission,
};
