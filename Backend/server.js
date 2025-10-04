const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const authRouter = require('./Router/authRouter');
const { authMiddleware } = require('./middleware/authMiddleware')
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(cookieParser())


app.use('/auth', authRouter);


app.get('/', (req, res) => res.send('Server is running'));


app.post('/create/dashboard' , authMiddleware , async (req , res) => {
    
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));