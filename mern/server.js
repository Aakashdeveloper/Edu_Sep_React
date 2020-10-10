const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// React build output folder
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});


app.get('/product',(req,res) => {
    res.json(
    [
        {
          "_id": 1,
          "city_name": "Delhi",
          "city": 1,
          "country_name": "India"
        },
        {
          "_id": 3,
          "city_name": "Pune",
          "city": 3,
          "country_name": "India"
        },
        {
          "_id": 2,
          "city_name": "Mumbai",
          "city": 2,
          "country_name": "India"
        }
    ])
})

//Set Port
const port = process.env.PORT || '3046';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));