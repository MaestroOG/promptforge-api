const express = require('express');
const router = express.Router();
const { getAllPrompts } = require('../controllers/prompts')


router.get('/', getAllPrompts)


module.exports = router;