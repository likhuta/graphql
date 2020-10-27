const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;
mongoose.connect('mongodb+srv://user:user@gettingstarted.ke44j.mongodb.net/graphql?retryWrites=true&w=majority',
 { useNewUrlParser: true, useUnifiedTopology: true });


// mongoose.connect('mongodb://Yauhen:Pass123@ds163835.mlab.com:63835/graphql-tutorial', { useMongoClient: true });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));


const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => {
  console.log('Connected to DB!')

  dbConnection.db.collection("movies", function(err, collection){
    collection.find({}).toArray(function(err, data){
        console.log(data); // it will print your collection data
    })
});


});

const collections = Object.keys(mongoose.connection.collections);
console.log(collections);


// let result = mongoose.connections.collections('movies');
// console.log(result)

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});