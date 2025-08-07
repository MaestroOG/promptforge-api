const Prompt = require('../models/prompt')

const getAllPrompts = async (req, res) => {
    try {
        const allPrompts = await Prompt.find({});
        res.json({ success: true, allPrompts })
    } catch (error) {
        res.json({ error })
    }
}

const createNewPromptEntry = async (req, res) => {
    const { title, prompt } = req.body;

    if (!title || !prompt) {
        return res.status(400).json({ message: 'Invalid request' })
    }
    try {
        const result = await Prompt.create({
            title,
            fullPrompt: prompt,
            creator: req.user._id
        })

        res.json({ success: true, result })
    } catch (error) {
        res.json({ error })
    }
}

const getAllPromptsOfSingleUser = async (req, res) => {
    const { _id } = req.user;
    try {
        const prompts = await Prompt.find({ creator: _id });

        if (prompts.length === 0) {
            return res.json({ message: 'You have no prompts submitted. Please submit one' })
        }
        res.json({ success: true, prompts })
    } catch (error) {
        res.json({ error })
    }
}

const deletePrompt = async (req, res) => {
    const { promptId } = req.body;

    try {
        const result = await Prompt.findOneAndDelete({ _id: promptId })
        res.json({ success: true, result });
    } catch (error) {
        res.json({ error })
    }
}

const editPrompt = async (req, res) => {
    try {
        const { promptId, updates } = req.body;

        const updatedPrompt = await Prompt.findOneAndUpdate(
            {
                _id: promptId,
                creator: req.user._id
            },
            {
                $set: updates
            },
            {
                new: true,
                runValidators: true
            }
        )

        if (!updatedPrompt) {
            return res.status(404).json({ message: 'Prompt not found or not authorized' });
        }

        res.json({ success: true, updatedPrompt });
    } catch (error) {
        res.json({ error })
    }
}

module.exports = {
    getAllPrompts,
    createNewPromptEntry,
    getAllPromptsOfSingleUser,
    deletePrompt,
    editPrompt
}