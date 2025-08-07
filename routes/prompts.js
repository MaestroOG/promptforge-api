const express = require('express');
const router = express.Router();
const { getAllPrompts, createNewPromptEntry, getAllPromptsOfSingleUser, deletePrompt, editPrompt } = require('../controllers/prompts')


router.get('/', getAllPrompts)

router.post('/', createNewPromptEntry)

router.delete('/', deletePrompt)

router.patch('/', editPrompt)

router.get('/my-prompts', getAllPromptsOfSingleUser)


module.exports = router;