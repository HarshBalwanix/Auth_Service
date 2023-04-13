const express=require("express");
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverconfig');
const apiRoutes=require('./routes/index');

const app =express();

const prepareAndStartServer =() =>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(3001,()=>{
        console.log('server started on PORT',PORT);
    });
}

prepareAndStartServer();