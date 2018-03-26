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

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne,
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

//findOneAndDelete //fav one
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
//   console.log(result);
// });

// db.collection('Users').deleteMany({name : 'Venkatesh'}).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id:new ObjectID('5ab8bfcb9d73019b84b85b92')}).then((result)=>{
  console.log(result);
});


  //client.close();
});
