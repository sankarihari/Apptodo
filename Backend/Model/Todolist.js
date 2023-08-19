const mongoose = require ('mongoose');
const todoSchema = mongoose.Schema({
    list:String,
    status:String,
   

});

const todoModel=mongoose.model('Todolist',todoSchema);
module.exports=todoModel;