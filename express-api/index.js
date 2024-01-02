const express = require('express')
const app = express()
const port = 3000

// import bodyParser
const bodyParser = require('body-parser');

// parse aplications/x-www-form-urlencded
app.use(bodyParser.urlencoded({ extended: false}));

// parse aplication/json
app.use(bodyParser.json());

// import routes posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter); //use router posts dari express routes

app.listen(port, () => {
    console.log(`app Runing on port ${port}`);
});