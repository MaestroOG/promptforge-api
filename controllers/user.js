const User = require('../models/user')
const bcrypt = require('bcrypt');
const { generateApiKey } = require('../utils/user')
const saltRounds = 10;


const registerUser = (req, res) => {
    const { email, password } = req.body;

    const key = generateApiKey();

    bcrypt.hash(password, saltRounds, async function (err, hash) {

        if (err) {
            return res.json({ err })
        }

        const user = await User.create({
            email: email,
            password: hash,
            apiKey: key
        })

        return res.json({
            email: user.email,
            apiKey: user.apiKey
        })
    });
}


module.exports = {
    registerUser
}