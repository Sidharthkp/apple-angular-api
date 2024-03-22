const express = require('express');
const contentRouter = require('./routes/contents');

const app = express();

const port = 8081;

const cors = require("cors");

app.use(cors());

app.use('/content', contentRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});