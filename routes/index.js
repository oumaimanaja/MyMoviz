var express = require("express");
var router = express.Router();
//var OWM_API_KEY = process.env.OWN_API_KEY;
OWM_API_KEY = "6e7160850b09d7005ce99246185863a8";

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`)
    .then((reponse) => reponse.json())
    .then((data) => res.json({ movies: data.results }));
});

module.exports = router;
