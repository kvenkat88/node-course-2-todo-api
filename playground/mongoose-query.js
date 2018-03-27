const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');


// var id = '5ab8f61552c7f1cbcfc651f7';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

var id = '5ab8f61552c7f1cbcfc651f7';

User.findById(id).then((user)=>{
  if (!user){
    return console.log('Unable to find user');
  }
  console.log('Found user by ID record',user);
}).catch((err)=>{
  console.log("Exception occurred",e);
})


// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id',todo);
// }).catch((e)=> console.log(e));
