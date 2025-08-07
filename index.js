require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const promptRouter = require('./routes/prompts')
const userRouter = require('./routes/user')
const { validateEmailAndPassword, checkValidRequest } = require('./middleware/user')
const connectDB = require('./connect')

connectDB(process.env.MONGODB_CONNECTION_STRING)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Please use the API routes')
})

app.use('/api/user', validateEmailAndPassword, userRouter)
app.use('/api/prompts', checkValidRequest, promptRouter);



app.listen(PORT, () => console.log(`Server started at port:${PORT}`))