var express = require("express");
var router = express.Router();
var OWM_API_KEY = process.env.OWN_API_KEY;

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`)
    .then((reponse) => reponse.json())
    .then((data) => res.json({ movies: data.results }));
});

module.exports = router;
