//object restructuring example
var user ={name:'andrew',age:25};
var {name} = user;
console.log(name);

//const MongoClient = require('mongodb').MongoClient;
//This creates a varaiable of MongoClient from MongoDb and pull MongoClient property from MOngoDb
const {MongoClient,ObjectID} = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,client)=>{
  if (err) {
    //console.log(err);
    return console.log("Unable to connect to MongoDb Server",err);
  }
  console.log("Connected to MongoDB Server Successfully")
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  //
  // },(err,result)=>{
  //   if (err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'Venkatesh',
  //   age : 29,
  //   location : 'Chennai'
  //
  // },(err,result)=>{
  //   if (err) {
  //     return console.log('Unable to insert into Users',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });
  client.close();
});
