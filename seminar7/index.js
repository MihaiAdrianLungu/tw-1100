// const number = require("./constants");
// import { number } from "./constants.js";
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usersRoutes = require('./user/user.routes') 
const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use('/users', usersRoutes);

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
});

