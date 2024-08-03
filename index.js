const express = require('express');
const db = require('./models');
const {join} = require("node:path");
const {readFileSync} = require("node:fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// OR Configure CORS with specific options
app.use(cors({
    origin: 'https://carrier-info.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at index i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Route to fetch all CarrierInfo records
app.get('/', async (req, res, next) => {
    try {
        //     const dataPath = join(__dirname, './bootstrap/records.json');
        // const rawData = readFileSync(dataPath, 'utf8');
        // const jsonData =shuffleArray(JSON.parse(rawData));
        //
        //     // Insert data into the database
        //     // for (const item of jsonData) {
        //     //     await db.CarrierInfo.upsert(item)
        //     //         .catch(err => {
        //     //             console.error('Error inserting or updating CarrierInfo record:', err);
        //     //             throw err;
        //     //         })
        //     // }

        const carriers = await db.CarrierInfo.findAll(); // Access the model from the db object
        res.json(carriers); // Send the fetched records as JSON
    } catch (err) {
        console.error('Error fetching CarrierInfo records:', err);
        // res.status(500).send('Server Error');
        next(err);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    db.sequelize.authenticate()
        .then(() => console.log('Database connected...'))
        .catch(err => console.log('Error: ' + err));
});
