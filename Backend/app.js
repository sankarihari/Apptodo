const express = require('express');
const app = new express();

const morgan = require('morgan');
app.use(morgan('dev'));



require('dotenv').config();
require('./db/mongodb');



const todoRoutes =require('./routes/todoRoutes');
app.use('/api',todoRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});