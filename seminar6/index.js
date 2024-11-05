// const number = require("./constants");
// import { number } from "./constants.js";
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usersMethods = require('./user.methods');
const app = express();

const PORT = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/users', async (req, res) => {
    const { age, name } = req.query;

    const users = await usersMethods.findMany({age, name});

    res.status(200).json(users);
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id ? Number(req.params.id) : null;

    if (isNaN(userId)) {
        throw new Error('User id is not valid')
    }

    const user = users.find(user => user.id === userId);

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({message: `User with id ${userId} not found.`})
    }    
})

app.delete('/users/:id', async (req, res) => {
    const userId = req.params.id ? Number(req.params.id) : null;

    if (isNaN(userId)) {
        throw new Error('User id is not valid')
    }

    const deletedUser = await usersMethods.deleteOne(userId);

    res.status(200).json(deletedUser);
})

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
});

