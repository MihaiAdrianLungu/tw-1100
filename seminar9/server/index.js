const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./database/models/User');
const Order = require('./database/models/Order');
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');
const authRoutes = require('./routes/auth.routes');
const { verifyToken } = require('./utils');

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3001;

User.hasMany(Order, { foreignKey: 'userId' });

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/orders', verifyToken, orderRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
});