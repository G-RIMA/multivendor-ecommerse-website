const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logging requests with morgan
//app.use(morgan('tiny'));
app.use(cors({
  origin: 'http://localhost:3001' // Allow requests from your frontend
}));

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    w: 'majority'
  }
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Define routes
//const customerRoutes = require('./routes/customerRoutes');
//const productRoutes = require('./routes/productRoutes');
//const orderRoutes = require('./routes/orderRoutes');
//const vendorRoutes = require('./routes/vendorRoute');
const authRoutes = require('./routes/authRoute');
//const reviewRoutes = require('./routes/reviewRoutes');


//app.use('/api', customerRoutes);
//app.use('/products', productRoutes);
//app.use('/orders', orderRoutes);
//app.use('/api/vendors', vendorRoutes);

app.use('/', authRoutes);
//app.use('/reviews', reviewRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
