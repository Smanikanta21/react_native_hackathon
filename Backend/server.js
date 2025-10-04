const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const authRouter = require('./Router/authRouter');
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(cookieParser())

// Auth routes
app.use('/auth', authRouter);

// Test route
app.get('/', (req, res) => res.send('Server is running'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));