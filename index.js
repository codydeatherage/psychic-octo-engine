const express = require('express')
const cors = require('cors')
const db = require('./db')
const router = require('./router')
const dotenv = require('dotenv')
dotenv.config({path: `${__dirname}/.env.local`});
const app = express();
const apiPort = 3000

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
console.log('key', process.env.API_KEY);
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('comics')
})

app.use('/api', router);

app.listen(apiPort, process.env.IP, () => console.log(`Server running on port ${apiPort}, ${process.env.IP}`));