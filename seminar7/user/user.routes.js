const express = require("express");
const usersMethods = require("./user.methods");
const router = express.Router();

router.get('/', async (req, res) => {
    const { age, name } = req.query;

    const users = await usersMethods.findMany({age, name});

    res.status(200).json(users);
})

router.get('/:id', (req, res) => {
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

router.delete('/:id', async (req, res) => {
    const userId = req.params.id ? Number(req.params.id) : null;

    if (isNaN(userId)) {
        throw new Error('User id is not valid')
    }

    const deletedUser = await usersMethods.deleteOne(userId);

    res.status(200).json(deletedUser);
})

module.exports = router;