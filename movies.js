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
    name: "Interstellar",
    rating: 90,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    year: 2014,
    oscars: 1,
    oscarDetails: ["Best Visual Effects"],
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    music: "Hans Zimmer",
    info: "A love letter to space, time and the bond between a father and daughter. Zimmer's organ score hits like a force of nature."
  },
  {
    name: "The Dark Knight",
    rating: 90,
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
    name: "Se7en",
    rating: 90,
    genres: ["Crime", "Thriller", "Mystery"],
    year: 1995,
    oscars: 0,
    actors: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
    director: "David Fincher",
    music: "Howard Shore",
    info: "A rain-soaked descent into the seven deadly sins. \"What's in the box?\" — an ending you never forget."
  },
  {
    name: "The Usual Suspects",
    rating: 90,
    genres: ["Crime", "Mystery", "Thriller"],
    year: 1995,
    oscars: 2,
    oscarDetails: ["Best Supporting Actor", "Best Original Screenplay"],
    actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio del Toro"],
    director: "Bryan Singer",
    music: "John Ottman",
    info: "The greatest twist in con-man cinema. And like that... he's gone."
  },
  {
    name: "The Prestige",
    rating: 90,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    year: 2006,
    oscars: 0,
    actors: ["Hugh Jackman", "Christian Bale", "Michael Caine"],
    director: "Christopher Nolan",
    music: "David Julyan",
    info: "Are you watching closely? A duel between two obsessive magicians that rewards every rewatch."
  },
  {
    name: "Oppenheimer",
    rating: 90,
    genres: ["Biography", "Drama", "History"],
    year: 2023,
    oscars: 7,
    oscarDetails: ["Best Picture", "Best Director", "Best Actor", "Best Supporting Actor", "Best Cinematography", "Best Film Editing", "Best Original Score"],
    actors: ["Cillian Murphy", "Robert Downey Jr.", "Emily Blunt"],
    director: "Christopher Nolan",
    music: "Ludwig Göransson",
    info: "The man who moved the world and then had to live with it. A three-hour symphony of dread and genius."
  },
  {
    name: "Schindler's List",
    rating: 90,
    genres: ["Biography", "Drama", "History"],
    year: 1993,
    oscars: 7,
    oscarDetails: ["Best Picture", "Best Director", "Best Adapted Screenplay", "Best Cinematography", "Best Film Editing", "Best Original Score", "Best Production Design"],
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    director: "Steven Spielberg",
    music: "John Williams",
    info: "Whoever saves one life saves the world entire. Devastating, essential filmmaking."
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 90,
    genres: ["Fantasy", "Adventure", "Drama"],
    year: 2001,
    oscars: 4,
    oscarDetails: ["Best Cinematography", "Best Makeup", "Best Visual Effects", "Best Original Score"],
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    director: "Peter Jackson",
    music: "Howard Shore",
    info: "The journey begins. Middle-earth brought to life with a craft that has rarely been matched."
  },
  {
    name: "The Lord of the Rings: The Two Towers",
    rating: 90,
    genres: ["Fantasy", "Adventure", "Drama"],
    year: 2002,
    oscars: 2,
    oscarDetails: ["Best Visual Effects", "Best Sound Editing"],
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    director: "Peter Jackson",
    music: "Howard Shore",
    info: "Helm's Deep, Gollum, and Sam's speech about the stories that mattered. The middle chapter that never sags."
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    rating: 90,
    genres: ["Fantasy", "Adventure", "Drama"],
    year: 2003,
    oscars: 11,
    oscarDetails: ["Best Picture", "Best Director", "Best Adapted Screenplay", "Best Original Score", "Best Original Song", "Best Visual Effects", "Best Film Editing", "Best Art Direction", "Best Costume Design", "Best Makeup", "Best Sound Mixing"],
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    director: "Peter Jackson",
    music: "Howard Shore",
    info: "A clean sweep of 11 Oscars. The most cathartic ending in blockbuster history — bow to no one."
  },
  {
    name: "The Green Mile",
    rating: 90,
    genres: ["Crime", "Drama", "Fantasy"],
    year: 1999,
    oscars: 0,
    actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    director: "Frank Darabont",
    music: "Thomas Newman",
    info: "A death-row miracle wrapped in heartbreak. John Coffey — like the drink, but not spelled the same."
  },
  {
    name: "Forrest Gump",
    rating: 90,
    genres: ["Drama", "Romance", "Comedy"],
    year: 1994,
    oscars: 6,
    oscarDetails: ["Best Picture", "Best Director", "Best Actor", "Best Adapted Screenplay", "Best Visual Effects", "Best Film Editing"],
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    director: "Robert Zemeckis",
    music: "Alan Silvestri",
    info: "Life is like a box of chocolates. A simple man running through half a century of American history."
  },
  {
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    rating: 90,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2003,
    oscars: 0,
    actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
    director: "Gore Verbinski",
    music: "Klaus Badelt",
    info: "The one that made a theme-park ride into an icon. Jack Sparrow's entrance is pure cinema."
  },
  {
    name: "Pirates of the Caribbean: Dead Man's Chest",
    rating: 90,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2006,
    oscars: 1,
    oscarDetails: ["Best Visual Effects"],
    actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
    director: "Gore Verbinski",
    music: "Hans Zimmer",
    info: "Davy Jones and his barnacled crew raise the stakes. The three-way sword fight on the wheel is a blast."
  },
  {
    name: "Pirates of the Caribbean: At World's End",
    rating: 90,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2007,
    oscars: 0,
    actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
    director: "Gore Verbinski",
    music: "Hans Zimmer",
    info: "The grand, chaotic finale of the original trilogy. The maelstrom battle is gloriously over-the-top."
  },
  {
    name: "Pirates of the Caribbean: On Stranger Tides",
    rating: 90,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2011,
    oscars: 0,
    actors: ["Johnny Depp", "Penélope Cruz", "Ian McShane"],
    director: "Rob Marshall",
    music: "Hans Zimmer",
    info: "Jack hunts the Fountain of Youth with Blackbeard on his tail. Mermaids, zombies and a leaner adventure."
  },
  {
    name: "Pirates of the Caribbean: Dead Men Tell No Tales",
    rating: 90,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2017,
    oscars: 0,
    actors: ["Johnny Depp", "Javier Bardem", "Brenton Thwaites"],
    director: "Joachim Rønning & Espen Sandberg",
    music: "Geoff Zanelli",
    info: "Captain Salazar's ghost crew hunts Jack one last time. A nostalgic send-off for the saga."
  },
  {
    name: "The Truman Show",
    rating: 90,
    genres: ["Comedy", "Drama", "Sci-Fi"],
    year: 1998,
    oscars: 0,
    actors: ["Jim Carrey", "Ed Harris", "Laura Linney"],
    director: "Peter Weir",
    music: "Burkhard Dallwitz & Philip Glass",
    info: "Decades ahead of its time on reality TV and surveillance. \"In case I don't see ya — good afternoon, good evening, and good night.\""
  },
  {
    name: "Joker",
    rating: 90,
    genres: ["Crime", "Drama", "Thriller"],
    year: 2019,
    oscars: 2,
    oscarDetails: ["Best Actor", "Best Original Score"],
    actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    director: "Todd Phillips",
    music: "Hildur Guðnadóttir",
    info: "A character study disguised as a comic-book film. Phoenix disappears into Arthur Fleck."
  },
  {
    name: "A Beautiful Mind",
    rating: 90,
    genres: ["Biography", "Drama"],
    year: 2001,
    oscars: 4,
    oscarDetails: ["Best Picture", "Best Director", "Best Supporting Actress", "Best Adapted Screenplay"],
    actors: ["Russell Crowe", "Jennifer Connelly", "Ed Harris"],
    director: "Ron Howard",
    music: "James Horner",
    info: "The brilliant, troubled mind of John Nash. A story about genius, delusion and the love that anchors a life."
  },
  {
    name: "V for Vendetta",
    rating: 90,
    genres: ["Action", "Drama", "Sci-Fi"],
    year: 2005,
    oscars: 0,
    actors: ["Hugo Weaving", "Natalie Portman", "Stephen Rea"],
    director: "James McTeigue",
    music: "Dario Marianelli",
    info: "Ideas are bulletproof. A masked revolutionary and an unforgettable Guy Fawkes finale."
  },
  {
    name: "Inside Out",
    rating: 90,
    genres: ["Animation", "Adventure", "Comedy"],
    year: 2015,
    oscars: 1,
    oscarDetails: ["Best Animated Feature"],
    actors: ["Amy Poehler", "Phyllis Smith", "Bill Hader"],
    director: "Pete Docter",
    music: "Michael Giacchino",
    info: "Pixar maps the inside of a child's head and breaks your heart with a memory called Bing Bong."
  },
  {
    name: "Shutter Island",
    rating: 90,
    genres: ["Mystery", "Thriller", "Drama"],
    year: 2010,
    oscars: 0,
    actors: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    director: "Martin Scorsese",
    music: "Robbie Robertson (music supervisor) (Not Sure)",
    info: "A psychological maze of an island asylum. \"Which would be worse — to live as a monster, or to die as a good man?\""
  },
  {
    name: "Inception",
    rating: 90,
    genres: ["Sci-Fi", "Action", "Thriller"],
    year: 2010,
    oscars: 4,
    oscarDetails: ["Best Cinematography", "Best Visual Effects", "Best Sound Editing", "Best Sound Mixing"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Marion Cotillard"],
    director: "Christopher Nolan",
    music: "Hans Zimmer",
    info: "A dream within a dream within a dream. The spinning top still hasn't fallen."
  },
  {
    name: "Dune",
    rating: 90,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    year: 2021,
    oscars: 6,
    oscarDetails: ["Best Cinematography", "Best Original Score", "Best Visual Effects", "Best Film Editing", "Best Production Design", "Best Sound"],
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    director: "Denis Villeneuve",
    music: "Hans Zimmer",
    info: "Sci-fi on the grandest possible scale. Arrakis has never looked or sounded so vast."
  },
  {
    name: "The Mandalorian and Grogu",
    rating: 90,
    genres: ["Sci-Fi", "Action", "Adventure"],
    year: 2026,
    oscars: 0,
    actors: ["Pedro Pascal (Not Sure)", "Sigourney Weaver (Not Sure)"],
    director: "Jon Favreau",
    music: "Ludwig Göransson (Not Sure)",
    info: "The first big-screen Mandalorian adventure (Not Sure on full details — upcoming release)."
  },
  {
    name: "Spider-Man: No Way Home",
    rating: 90,
    genres: ["Action", "Adventure", "Sci-Fi"],
    year: 2021,
    oscars: 0,
    actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    director: "Jon Watts",
    music: "Michael Giacchino",
    info: "The multiverse cracks open and three Spider-Men share the screen. Fan service done right."
  },
  {
    name: "Parasite",
    rating: 90,
    genres: ["Drama", "Thriller", "Comedy"],
    year: 2019,
    oscars: 4,
    oscarDetails: ["Best Picture", "Best Director", "Best Original Screenplay", "Best International Feature"],
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    director: "Bong Joon-ho",
    music: "Jung Jae-il",
    info: "A razor-sharp class satire that turns on a dime into horror. The first non-English film to win Best Picture."
  },
  {
    name: "Hamnet",
    rating: 90,
    genres: ["Drama", "History"],
    year: 2025,
    oscars: 0,
    actors: ["Paul Mescal (Not Sure)", "Jessie Buckley (Not Sure)"],
    director: "Chloé Zhao",
    music: "Max Richter (Not Sure)",
    info: "An adaptation of Maggie O'Farrell's novel about Shakespeare's family and grief (Not Sure on full details — recent release)."
  },
  {
    name: "The Departed",
    rating: 90,
    genres: ["Crime", "Drama", "Thriller"],
    year: 2006,
    oscars: 4,
    oscarDetails: ["Best Picture", "Best Director", "Best Adapted Screenplay", "Best Film Editing"],
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    director: "Martin Scorsese",
    music: "Howard Shore",
    info: "Cops and rats in Boston, each hunting the other. The film that finally won Scorsese his Oscar."
  },
  {
    name: "Zodiac",
    rating: 90,
    genres: ["Crime", "Drama", "Mystery"],
    year: 2007,
    oscars: 0,
    actors: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr."],
    director: "David Fincher",
    music: "David Shire",
    info: "An obsessive, meticulous hunt for a killer who was never caught. Procedural filmmaking at its finest."
  },
  {
    name: "The Intouchables",
    rating: 90,
    genres: ["Biography", "Comedy", "Drama"],
    year: 2011,
    oscars: 0,
    actors: ["François Cluzet", "Omar Sy"],
    director: "Olivier Nakache & Éric Toledano",
    music: "Ludovico Einaudi",
    info: "An unlikely friendship between a paralysed aristocrat and his carer. Warm, funny and genuinely moving."
  },
  {
    name: "Carry-On",
    rating: 90,
    genres: ["Action", "Thriller"],
    year: 2024,
    oscars: 0,
    actors: ["Taron Egerton", "Jason Bateman", "Sofia Carson"],
    director: "Jaume Collet-Serra",
    music: "Lorne Balfe",
    info: "A young TSA agent is blackmailed into letting a package onto a flight. A tight Christmas-set thriller."
  },
  {
    name: "Sinners",
    rating: 90,
    genres: ["Horror", "Thriller", "Drama"],
    year: 2025,
    oscars: 0,
    actors: ["Michael B. Jordan", "Hailee Steinfeld (Not Sure)", "Miles Caton (Not Sure)"],
    director: "Ryan Coogler",
    music: "Ludwig Göransson",
    info: "A genre-bending period horror from Ryan Coogler (Not Sure on full cast details)."
  },
  {
    name: "Pulp Fiction",
    rating: 90,
    genres: ["Crime", "Drama"],
    year: 1994,
    oscars: 1,
    oscarDetails: ["Best Original Screenplay"],
    actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    director: "Quentin Tarantino",
    music: "Various (compiled soundtrack) (Not Sure)",
    info: "Tarantino reorders time and rewrites cool. Endlessly quotable and impossibly stylish."
  },
  {
    name: "Inglourious Basterds",
    rating: 90,
    genres: ["War", "Drama", "Thriller"],
    year: 2009,
    oscars: 1,
    oscarDetails: ["Best Supporting Actor"],
    actors: ["Brad Pitt", "Christoph Waltz", "Mélanie Laurent"],
    director: "Quentin Tarantino",
    music: "Various (compiled soundtrack) (Not Sure)",
    info: "A WWII revenge fantasy with the greatest opening scene Tarantino ever wrote. Waltz is electric."
  },
  {
    name: "Catch Me If You Can",
    rating: 90,
    genres: ["Biography", "Crime", "Drama"],
    year: 2002,
    oscars: 0,
    actors: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"],
    director: "Steven Spielberg",
    music: "John Williams",
    info: "A charming cat-and-mouse caper based on the real Frank Abagnale. Breezy, slick and effortlessly fun."
  },
  {
    name: "Sherlock Holmes",
    rating: 90,
    genres: ["Action", "Adventure", "Mystery"],
    year: 2009,
    oscars: 0,
    actors: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"],
    director: "Guy Ritchie",
    music: "Hans Zimmer",
    info: "A punchy, witty reinvention of Holmes as a brawling genius. RDJ and Jude Law have perfect chemistry."
  },
  {
    name: "Sherlock Holmes: A Game of Shadows",
    rating: 90,
    genres: ["Action", "Adventure", "Mystery"],
    year: 2011,
    oscars: 0,
    actors: ["Robert Downey Jr.", "Jude Law", "Jared Harris"],
    director: "Guy Ritchie",
    music: "Hans Zimmer",
    info: "Holmes faces off against Moriarty. Bigger, bolder and just as much fun as the first."
  },
  {
    name: "Joker: Folie à Deux",
    rating: 90,
    genres: ["Crime", "Drama", "Musical"],
    year: 2024,
    oscars: 0,
    actors: ["Joaquin Phoenix", "Lady Gaga", "Brendan Gleeson"],
    director: "Todd Phillips",
    music: "Hildur Guðnadóttir",
    info: "The divisive musical sequel that takes Arthur Fleck to Arkham and the courtroom."
  },
  {
    name: "The Devil Wears Prada 2",
    rating: 90,
    genres: ["Comedy", "Drama"],
    year: 2026,
    oscars: 0,
    actors: ["Meryl Streep (Not Sure)", "Anne Hathaway (Not Sure)", "Emily Blunt (Not Sure)"],
    director: "David Frankel (Not Sure)",
    music: "(Not Sure)",
    info: "The long-awaited fashion-world sequel (Not Sure on full details — upcoming release)."
  },
  {
    name: "One Battle After Another",
    rating: 90,
    genres: ["Drama", "Action", "Thriller"],
    year: 2025,
    oscars: 0,
    actors: ["Leonardo DiCaprio", "Sean Penn (Not Sure)", "Benicio del Toro (Not Sure)"],
    director: "Paul Thomas Anderson",
    music: "Jonny Greenwood (Not Sure)",
    info: "Paul Thomas Anderson's latest, with DiCaprio leading (Not Sure on full details — recent release)."
  },
  {
    name: "Normal",
    rating: 90,
    genres: ["Thriller (Not Sure)", "Drama (Not Sure)"],
    year: 2026,
    oscars: 0,
    actors: ["Bob Odenkirk", "(Not Sure)"],
    director: "(Not Sure)",
    music: "(Not Sure)",
    info: "An upcoming film starring Bob Odenkirk as a sheriff (Not Sure on full details — upcoming release)."
  },
  {
    name: "Dead Poets Society",
    rating: 90,
    genres: ["Drama", "Comedy"],
    year: 1989,
    oscars: 1,
    oscarDetails: ["Best Original Screenplay"],
    actors: ["Robin Williams", "Robert Sean Leonard", "Ethan Hawke"],
    director: "Peter Weir",
    music: "Maurice Jarre",
    info: "O Captain! My Captain! Carpe diem, and a teacher who changes everything. Seize the day."
  },
  {
    name: "Fight Club",
    rating: 90,
    genres: ["Drama", "Thriller"],
    year: 1999,
    oscars: 0,
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    director: "David Fincher",
    music: "The Dust Brothers",
    info: "The first rule of Fight Club... A blistering satire of consumerism with a twist that recontextualises everything."
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