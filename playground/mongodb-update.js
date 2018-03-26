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


  // db.collection('Todos').findOneAndUpdate({
  //   _id :new ObjectID("5ab8cf1466b5476e349f73fe")},
  //     {$set:{
  //       completed :true
  //     }},{returnOriginal : false}
  //   ).then((results)=>{
  //       console.log(results);
  //   });

  db.collection('Users').findOneAndUpdate({
    _id :new ObjectID("5ab8e27166b5476e349f76f8")},
      {
        $set:{
        name :'Venkatesh'
      },
      $inc:{
        age : +1
      }
    },{returnOriginal : false}
    ).then((results)=>{
        console.log(results);
    });


  //client.close();
});
