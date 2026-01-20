const express = require('express'); 
const customersroutes = require('./routes/customersroutes.js');
const produkroutes = require('./routes/produkroutes.js');
const categoriesroutes = require('./routes/categoriesroutes.js');
const ordersroutes = require('./routes/ordersroutes.js');
const order_detailroutes = require('./routes/order_detailsroutes.js');
const userroutes = require('./routes/userroutes.js');
const authroutes = require('./routes/authroutes.js');




const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/customers", customersroutes);
app.use("/products", produkroutes);
app.use("/categories", categoriesroutes);
app.use("/orders", ordersroutes);
app.use("/order_details", order_detailroutes);
app.use('/api/auth', authroutes);
app.use('/api/user', userroutes);

// Root route
app.get('/', (req, res) => {
    res.send('Selamat Datang di GlanZCare');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);});
