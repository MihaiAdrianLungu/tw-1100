const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/models/User');
const router = express.Router();

const BCRYPT_SALT = process.env.BCRYPT_SALT;

router.get('/', async function (req, res) {
    try {
        const users = await User.findAll();

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

router.get('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id, {
            attributes: {
                exclude: ['password']
            }
        });

        if (user) {
            return res.status(200).json(user);
        }

        res.status(404).json({ error: 'User not found' })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

router.post('/', async function (req, res) {
    try {
        const { username, role, email, password } = req.body;

        const salt = bcrypt.genSaltSync(BCRYPT_SALT);
        const hash = bcrypt.hashSync(password, salt);

        const createdUser = await User.create({
            username,
            role,
            email,
            password: hash
        })

        delete createdUser.dataValues.password;

        res.status(201).json(createdUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})

router.put('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        const updatedUser = await user.update(req.body, {
            returning: true,
        })

        delete updatedUser.dataValues.password;

        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})

router.delete('/:id', async function(req,res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        await user.destroy();

        res.status(200).json({error: 'User sucessfully deleted.'})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;