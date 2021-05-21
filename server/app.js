require('dotenv').config()

const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const routers = require('./routes');
const { connectMongo } = require('./config/mongoDB');
const cors = require('cors')

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors());
connectMongo().then( async (db) => {
    app.use(routers);

    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
    });
})


