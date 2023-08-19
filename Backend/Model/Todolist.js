const mongoose = require ('mongoose');
const todoSchema = mongoose.Schema({
    list:String

   

});

const todoModel=mongoose.model('Todolist',todoSchema);
module.exports=todoModel;