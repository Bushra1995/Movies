const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
// app.use(express.json());

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'ce81c5bfdcmsha6c650d32f74e2ep115470jsnc70f0c34e4c7',
    'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
  }
};


app.get("/movies", (req, res) => {
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
 