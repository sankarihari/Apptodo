const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const Todolist=require('../Model/Todolist');

// GET
router.get('/getdata',async(req,res)=>{
    try {
        const data = await Todolist.find();
        res.send(data);
    }
     catch (error) {
        res.status(404).send('Data not found');
        console.log(error);
        
    }
});

// POST
router.post('/postdata', async(req,res)=>{
    try {
        const item = req.body;
        const newData = new Todolist(item);
        const savedData= await newData.save();
        res.status(200).send('Posted Successfuly');
    } 
    catch (error) {
        res.status(404).send('Not Posted Successfuly');
        console.log(error);
        
    }
});
router.delete("/deletepost/:_id", async (req, res) => {
    try {
      let id = req.params._id;
      await Todolist.findByIdAndDelete(id);
      res.status(200).json({ message: " deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json("Error!!! Data not deleted");
    }
  });
  



module.exports=router;