//object restructuring example
// var user ={name:'andrew',age:25};
// var {name} = user;
// console.log(name);

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

  // db.collection('Todos').find({
  //   _id:new ObjectID('5ab8b8b263196b958d0ea202')
  //   }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch Todos',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count :${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch Todos count',err);
  // });

  db.collection('Users').find({name:'Venkatesh'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch the records for the query provided');
  });
  //client.close();
});
