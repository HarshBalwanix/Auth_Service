const express=require("express");
const bodyParser=require('body-parser');
const db=require('./models/index');
const {User,Role}=require('./models/index');

const {PORT}=require('./config/serverconfig');
const apiRoutes=require('./routes/index');
const { sequelize } = require("./models");

const app =express();

const prepareAndStartServer =() =>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(3001,()=>{
        console.log('server started on PORT',PORT);
        if(process.env.DB_SYNC)
        {
            db.sequelize.sync({alter:true});
        }
        //const
    });
}

prepareAndStartServer();