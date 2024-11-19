const express = require('express');
const User = require('../database/models/User');
const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const users = await User.findAll();

        res.status(200).json(users);
    } catch (error) {
        console.error(error)
    }
})

router.post('/', async function(req, res) {
    try {
        const { username, role, email, password } = req.body;

        const user = await User.create({
            username,
            role,
            email,
            password,
        })

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;