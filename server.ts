//requires
import express from 'express';
const app: any = express();
require('dotenv').config();

//setteres
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to MongoDB
require('./src/Model')();

//call route
require('./src/Router/Router')(app);

//port listen
app.listen(process.env.PORT_NUMBER || 8081, () => console.log("Server is hosted at 127.0.0.1:" + process.env.PORT || 8081));