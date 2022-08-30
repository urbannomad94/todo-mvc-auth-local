const deleteBtn = document.querySelectorAll(".del");
const movieItem = document.querySelectorAll("span.not");
const movieWatched = document.querySelectorAll("span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteMovie);
});

Array.from(movieItem).forEach((el) => {
  el.addEventListener("click", markWatched);
});

Array.from(movieWatched).forEach((el) => {
  el.addEventListener("click", markUnwatched);
});

async function deleteMovie() {
  const movieId = this.parentNode.dataset.id;
  try {
    const response = await fetch("watchlist/deleteMovie", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        movieIdFromJSFile: movieId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markWatched() {
  const movieId = this.parentNode.dataset.id;
  try {
    const response = await fetch("watchlist/markWatched", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        movieIdFromJSFile: movieId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markUnwatched() {
  const movieId = this.parentNode.dataset.id;
  try {
    const response = await fetch("watchlist/markUnwatched", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        movieIdFromJSFile: movieId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
