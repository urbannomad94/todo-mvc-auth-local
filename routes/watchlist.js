const express = require("express");
const router = express.Router();
const watchlistController = require("../controllers/watchlist");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, watchlistController.getWatchlist);

router.post("/createMovie", watchlistController.createMovie);

router.put("/markWatched", watchlistController.markWatched);

router.put("/markUnwatched", watchlistController.markUnwatched);

router.delete("/deleteMovie", watchlistController.deleteMovie);

module.exports = router;
