const Movie = require("../models/Movie");

module.exports = {
  getWatchlist: async (req, res) => {
    console.log(req.user);
    try {
      const movieItems = await Movie.find({ userId: req.user.id });
      const moviesLeft = await Movie.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("watchlist.ejs", {
        movies: movieItems,
        left: moviesLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createMovie: async (req, res) => {
    try {
      await Movie.create({
        movie: req.body.movieItem,
        completed: false,
        userId: req.user.id,
      });
      console.log("Movie has been added!");
      res.redirect("/watchlist");
    } catch (err) {
      console.log(err);
    }
  },
  markWatched: async (req, res) => {
    try {
      await Movie.findOneAndUpdate(
        { _id: req.body.movieIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Watched");
      res.json("Marked Watched");
    } catch (err) {
      console.log(err);
    }
  },
  markUnwatched: async (req, res) => {
    try {
      await Movie.findOneAndUpdate(
        { _id: req.body.movieIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Unwatched");
      res.json("Marked Unwatched");
    } catch (err) {
      console.log(err);
    }
  },
  deleteMovie: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Movie.findOneAndDelete({ _id: req.body.movieIdFromJSFile });
      console.log("Deleted Movie");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
