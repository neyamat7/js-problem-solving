import { getMovieReviewData } from "./data.js";
let sortByRating = false;

// show total movie, review and average review
function showMovieData() {
  const totalMovieArray = getMovieReviewData();
  const flatMovieArray = totalMovieArray.flat();
  const totalMovie = totalMovieArray.length;
  // show total movie
  showData(totalMovie, "total-movie");

  // total review
  let totalReview = flatMovieArray.length;
  showData(totalReview, "total-review");

  //   get total rating
  let totalRating = flatMovieArray.reduce((accum, movie) => {
    return accum + movie.rating;
  }, 0);
  showData(totalRating, "total-rating");

  // average rating
  let averageRating = totalRating / flatMovieArray.length;
  console.log(averageRating.toFixed(2));
  showData(averageRating.toFixed(2), "average-rating");

  // send data to show movie list handler
  showMovieList(flatMovieArray);

  // sort by rating handler
  document.getElementById("rating-sort").addEventListener("click", function () {
    removeChildNodes(document.querySelector("#show-movie-list UL"));
    if (!sortByRating) {
      sortByRating = true;
      showMovieList(flatMovieArray);
    } else {
      sortByRating = false;
      showMovieList(flatMovieArray);
    }
  });

  // show movie list by grouping
  document.getElementById("group").addEventListener("click", function () {
    removeChildNodes(document.querySelector("#show-movie-list UL"));
    showMovieByGroup(flatMovieArray);
  });
}

// show data
function showData(data, id) {
  document.getElementById(id).innerText = data;
}
// show review
function showMovieList(movies) {
  let sortedAllMovies;
  if (sortByRating) {
    sortedAllMovies = movies.toSorted((a, b) => b.rating - a.rating);
  } else {
    sortedAllMovies = movies.toSorted((a, b) => a.on - b.on);
  }

  // show movie after sorting
  const showMovieListUl = document.querySelector("#show-movie-list UL");
  sortedAllMovies.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add(
      "max-w-xl",
      "bg-slate-300",
      "font-semibold",
      "p-5",
      "rounded-lg"
    );
    li.innerHTML = `
        <h1 class="text-2xl mb-3">${movie.title} - ${movie.rating}</h1>
        <p class="text-lg">${movie.content}</p>
        <p class="text-lg">By ${movie.by} on ${new Intl.DateTimeFormat(
      "en-UK"
    ).format(movie.on)}</p>
    `;
    showMovieListUl.appendChild(li);
  });
}

// show movie by group
function showMovieByGroup(flatMovieArray) {
  const groupedMovie = Object.groupBy(flatMovieArray, ({ title }) => title);

  // get ul element to show the movie list
  let showGroupUL = document.querySelector("#show-movie-list UL");
  for (let movieTitle in groupedMovie) {
    let li = document.createElement("li");
    li.classList.add("bg-slate-300", "p-2", "rounded-md");
    li.innerHTML = `<h1 class="text-3xl font-medium">${movieTitle}</h1>`;
    // get single movie array
    let singleMovie = groupedMovie[movieTitle];
    singleMovie.forEach((review) => {
      let p = document.createElement("p");
      p.classList.add("text-lg");
      p.innerHTML = `✔️<span class="font-medium">${review.by}</span> has given ${review.rating} with a comment, ${review.content}`;
      li.appendChild(p);
    });
    showGroupUL.appendChild(li);
  }
}

// remove childNodes
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

showMovieData();
