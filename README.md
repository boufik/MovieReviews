# My Movie Reviews

A small static website that showcases a personal collection of favourite films — one card per movie, with my own rating, cast, director, composer, Oscars and a short note about why the film stuck with me.

No frameworks, no build step, no dependencies: just HTML, CSS and vanilla JavaScript.

## What happens in the project

* `movies.js` holds the data — 44 hand-written movie objects, each a plain `const`, collected at the bottom into a `movies` array.
* The same file contains a tiny renderer. On `DOMContentLoaded` it sorts a copy of `movies` by rating (highest first) and builds an `<article class="movie-card">` for each one into the `#movie-grid` section of `index.html`. Every value is HTML-escaped before it is injected, and the Oscars block is only rendered when a film actually won something.
* `styles.css` provides the dark theme (CSS custom properties, amber accent) and a responsive grid: 1 card per row on mobile, 2 on tablet, 3 on desktop.
* If the `movies` array is ever empty, the grid falls back to an empty-state message.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell: header, empty `#movie-grid`, footer with disclaimer and GitHub link |
| `movies.js` | Movie data + the card rendering logic |
| `styles.css` | Dark theme, card layout, responsive grid |
| `favicon.png` | Site icon |

## Running it

Open `index.html` in a browser — that's it. To serve it locally instead:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

The site is deployed on Vercel.

## Adding a movie

Define a new object in `movies.js` and add it to the `movies` array at the bottom of the file:

```js
const someMovie = {
    name: "Movie Title",
    rating: 95,                                   // out of 100
    genres: ["Drama", "Thriller"],
    year: 2024,
    oscars: 2,                                    // 0 if none
    oscarDetails: ["Best Picture", "Best Actor"], // optional
    actors: ["First Actor", "Second Actor"],
    director: "Director Name",
    music: "Composer Name",
    info: "Why this film is worth remembering."
}
```

Ordering inside the array doesn't matter — cards are always sorted by rating.

## Disclaimer

This is a non-commercial fan website created to celebrate my favourite movies. All related information is the intellectual property of its respective owners and production studios. No copyright infringement is intended; see the footer of the site for contact details.
