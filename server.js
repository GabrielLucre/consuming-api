const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors())

app.get('/', async (req, res) => {
    try {
        // response.data  
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        // const data = await response.json();

        return res.json(data);
    } catch (err) {
        console.log(err);
    }
});

app.listen('4567');