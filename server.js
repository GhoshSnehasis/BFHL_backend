// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const bodyparser = require('body-parser')


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    console.log(data)
    console.log(req.body)
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid input data' });
    }


    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
    const lowercaseAlphabets = data.filter(item => /^[a-z]+$/.test(item));

    const highestLowercase = lowercaseAlphabets.sort().pop() || "";

    const response = {
        is_success: true,
        user_id: "Snehasis Ghosh_28072002",
        email: "ghoshsnehasis19@gmail.com",
        roll_number: "21BCE1068",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: [highestLowercase]
    };
    

    res.json(response);
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
