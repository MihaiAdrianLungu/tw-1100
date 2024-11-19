const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/user.routes');

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
});