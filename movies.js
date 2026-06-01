/* =============================================================
   YOUR MOVIES
   -------------------------------------------------------------
   To add a film, copy one { ... } block below, paste it, and
   edit the fields. Keep the trailing comma between blocks.

   Fields:
     name     -> movie title (string)
     rating   -> your rating out of 100 (number)
     genres   -> list of genres (array of strings)
     year     -> year of release (number)
     oscars   -> number of Oscars won (use 0 if none)
     oscarDetails -> which Oscars were won (array of strings, optional)
     actors   -> main cast (array of strings)
     director -> director (string)
     music    -> music composer (string)
     info     -> any relevant note you want to remember (string)
   ============================================================= */

const movies = [
  {
    name: "The Dark Knight",
    rating: 96,
    genres: ["Action", "Crime", "Drama"],
    year: 2008,
    oscars: 2,
    oscarDetails: ["Best Supporting Actor", "Best Sound Editing"],
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
    music: "Hans Zimmer & James Newton Howard",
    info: "Heath Ledger's Joker is the gold standard of comic-book villains. A crime thriller that just happens to wear a cape."
  },
  {
    name: "Whiplash",
    rating: 92,
    genres: ["Drama", "Music"],
    year: 2014,
    oscars: 3,
    oscarDetails: ["Best Supporting Actor", "Best Film Editing", "Best Sound Mixing"],
    actors: ["Miles Teller", "J.K. Simmons"],
    director: "Damien Chazelle",
    music: "Justin Hurwitz",
    info: "A two-man war over the price of greatness. The final drum solo is one of cinema's best endings."
  },
  {
    name: "Spirited Away",
    rating: 94,
    genres: ["Animation", "Fantasy", "Adventure"],
    year: 2001,
    oscars: 1,
    oscarDetails: ["Best Animated Feature"],
    actors: ["Rumi Hiiragi", "Miyu Irino"],
    director: "Hayao Miyazaki",
    music: "Joe Hisaishi",
    info: "Studio Ghibli at its most imaginative. Endlessly rewatchable and beautifully hand-drawn."
  }
];

/* =============================================================
   RENDERING  (you usually don't need to touch anything below)
   ============================================================= */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createMovieCard(movie) {
  const card = document.createElement("article");
  card.className = "movie-card";

  const genreChips = (movie.genres || [])
    .map((g) => `<span class="chip">${escapeHtml(g)}</span>`)
    .join("");

  const actors = (movie.actors || []).map(escapeHtml).join(", ");

  let oscarsBlock = "";
  if (movie.oscars && movie.oscars > 0) {
    const oscarDisclaimer =
      movie.oscarDetails && movie.oscarDetails.length
        ? `<p class="oscar-detail">${movie.oscarDetails.map(escapeHtml).join(" &middot; ")}</p>`
        : "";
    oscarsBlock = `
      <div class="oscars-block">
        <p class="oscars">🏆 ${escapeHtml(movie.oscars)} Oscar${movie.oscars > 1 ? "s" : ""} won</p>
        ${oscarDisclaimer}
      </div>`;
  }

  card.innerHTML = `
    <div class="card-head">
      <h2 class="movie-name">
        ${escapeHtml(movie.name)}
        <span class="movie-year">(${escapeHtml(movie.year)})</span>
      </h2>
      <div class="rating">
        ${escapeHtml(movie.rating)}
        <small>/ 100</small>
      </div>
    </div>

    ${oscarsBlock}

    <div class="genres">${genreChips}</div>

    <div class="details">
      <div class="detail-row">
        <span class="detail-label">Director</span>
        <span class="detail-value">${escapeHtml(movie.director)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Starring</span>
        <span class="detail-value">${actors}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Music</span>
        <span class="detail-value">${escapeHtml(movie.music)}</span>
      </div>
    </div>

    <p class="info">${escapeHtml(movie.info)}</p>
  `;

  return card;
}

function renderMovies() {
  const grid = document.getElementById("movie-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!movies.length) {
    grid.innerHTML = `<p class="empty-state">No movies yet — add some in movies.js!</p>`;
    return;
  }

  movies.forEach((movie) => grid.appendChild(createMovieCard(movie)));
}

document.addEventListener("DOMContentLoaded", renderMovies);