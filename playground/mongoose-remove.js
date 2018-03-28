const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({'_id:'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5aba3ee5dbed8f262b732c5d').then((todo)=>{
  console.log(todo);
})
