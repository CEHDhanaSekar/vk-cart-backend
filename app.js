const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

dotenv.config({ path : path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello");
})

app.use('/api/v1',products);
app.use('/api/v1',orders);

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 8000 

app.listen(PORT, () => {
    console.log(`Server listening the port at ${process.env.PORT} in ${process.env.NODE_ENV}`);
})
