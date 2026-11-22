/* =============================================================================
Fields:
  name          -->  Movie title (string)
  rating        -->  Your rating out of 100 (number)
  genres        -->  List of genres (array of strings)
  year          -->  Year of release (number)
  oscars        -->  Number of Oscars won (use 0 if none)
  oscarDetails  -->  Which Oscars were won (array of strings, optional)
  actors        -->  Main cast (array of strings)
  director      -->  Director (string)
  music         -->  Music composer (string)
  info          -->  Any relevant note you want to remember (string)
  quote         -->  Line shown on the card; falls back to info if empty (string)
============================================================================= */

// 01: IMDB = 10
const shawshankRedemption = {
    name: "The Shawshank Redemption",
    rating: 100,
    genres: ["Drama"],
    year: 1994,
    oscars: 0,
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    director: "Frank Darabont",
    music: "Thomas Newman",
    info: "“Get busy living, or get busy dying.” Hope, patience and friendship inside Shawshank — nominated seven times, won nothing, and still tops every list. Highest IMDB-rated movie of all time for a reason!",
    quote: "Get busy living, or get busy dying."
}

// 02: IMDB = 10
const forrestGump = {
    name: "Forrest Gump",
    rating: 100,
    genres: ["Drama", "Romance"],
    year: 1994,
    oscars: 6,
    oscarDetails: ["Best Picture", "Best Director", "Best Actor", "Best Adapted Screenplay", "Best Visual Effects", "Best Film Editing"],
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    director: "Robert Zemeckis",
    music: "Alan Silvestri",
    info: "“Life is like a box of chocolates. You never know what you’re gonna get”. A simple man running through years of American history and achieving great things in his life.",
    quote: "Life is like a box of chocolates. You never know what you’re gonna get. Run Forrest, run!"
}

// 03: IMDB = 10
const prestige = {
    name: "The Prestige",
    rating: 100,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    year: 2006,
    oscars: 0,
    actors: ["Hugh Jackman", "Christian Bale", "Scarlett Johansson", "Michael Caine"],
    director: "Christopher Nolan",
    music: "David Julyan",
    info: "“Are you watching closely?” A breath-taking duel between two obsessive magicians in London, with each one of them attempting to outsmart the enemy.",
    quote: "Are you watching closely?"
}

// 04: IMDB = 10
const vForVendetta = {
    name: "V for Vendetta",
    rating: 100,
    genres: ["Action", "Drama", "Sci-Fi"],
    year: 2005,
    oscars: 0,
    actors: ["Hugo Weaving", "Natalie Portman", "Rupert Graves"],
    director: "James McTeigue",
    music: "Dario Marianelli",
    info: "“Ideas are bulletproof.” A masked revolutionary and an unforgettable Guy Fawkes finale.",
    quote: "Ideas are bulletproof."
}

// 05: IMDB = 10
const joker = {
    name: "Joker",
    rating: 100,
    genres: ["Crime", "Drama", "Thriller"],
    year: 2019,
    oscars: 2,
    oscarDetails: ["Best Actor", "Best Original Score"],
    actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    director: "Todd Phillips",
    music: "Hildur Guðnadóttir",
    info: "A character study disguised as a comic-book film. Phoenix disappears into Arthur Fleck.",
    quote: "The worst part of having a mental illness is people expect you to behave as if you don't."
}

// 06: IMDB = 10
const shutterIsland = {
    name: "Shutter Island",
    rating: 100,
    genres: ["Mystery", "Thriller", "Drama"],
    year: 2010,
    oscars: 0,
    actors: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley", "Emily Mortimer"],
    director: "Martin Scorsese",
    music: "Robbie Robertson (music supervisor)",
    info: "“Which would be worse? To live as a monster, or to die as a good man?” A psychological maze of an island asylum, featuring a detective trying to find the truth.",
    quote: "Which would be worse? To live as a monster, or to die as a good man?"
}

// 07: IMDB = 10
const darkKnight = {
    name: "The Dark Knight",
    rating: 100,
    genres: ["Action", "Crime", "Drama"],
    year: 2008,
    oscars: 2,
    oscarDetails: ["Best Supporting Actor", "Best Sound Editing"],
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman", "Michael Caine", "Morgan Freeman"],
    director: "Christopher Nolan",
    music: "Hans Zimmer & James Newton Howard",
    info: "Heath Ledger's Joker is the gold standard of comic-book villains. A crime thriller that just happens to wear a cape.",
    quote: "You either die a hero, or you live long enough to see yourself become the villain."
}


// 08: IMDB = 10
const potcBlackPearl = {
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    rating: 99,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2003,
    oscars: 0,
    actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Geoffrey Rush"],
    director: "Gore Verbinski",
    music: "Klaus Badelt",
    info: "The one that made a theme-park ride into an icon. Jack Sparrow's entrance is pure cinema.",
    quote: "You will always remember this as the day you almost caught Captain Jack Sparrow!"
}

// 09: IMDB = 10
const potcDeadMansChest = {
    name: "Pirates of the Caribbean: Dead Man's Chest",
    rating: 99,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2006,
    oscars: 1,
    oscarDetails: ["Best Visual Effects"],
    actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Geoffrey Rush", "Bill Nighy"],
    director: "Gore Verbinski",
    music: "Hans Zimmer",
    info: "Davy Jones and his barnacled crew raise the stakes. The three-way sword fight on the wheel is a bless to watch.",
    quote: "Hello, Beastie. It's not just about living forever, Jackie. The trick is living with yourself forever."
}

// 10: IMDB = 10
const potcAtWorldsEnd = {
    name: "Pirates of the Caribbean: At World's End",
    rating: 99,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2007,
    oscars: 0,
    actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Geoffrey Rush", "Bill Nighy", "Jack Davenport"],
    director: "Gore Verbinski",
    music: "Hans Zimmer",
    info: "The grand, chaotic finale of the original trilogy. The maelstrom battle is simply glorious and iconic.",
    quote: "The world is still the same. There's just less in it."
}


// 11: IMDB = 10
const lotrFellowship = {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 98,
    genres: ["Fantasy", "Adventure", "Drama"],
    year: 2001,
    oscars: 4,
    oscarDetails: ["Best Cinematography", "Best Makeup", "Best Visual Effects", "Best Original Score"],
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin", "Orlando Bloom", "Sean Bean", "Christopher Lee"],
    director: "Peter Jackson",
    music: "Howard Shore",
    info: "“You shall not pass!” The journey begins. Middle-earth brought to life with a craft that has rarely been matched.",
    quote: "You shall not pass!"
}

// 12: IMDB = 10
const lotrTwoTowers = {
    name: "The Lord of the Rings: The Two Towers",
    rating: 98,
    genres: ["Fantasy", "Adventure", "Drama"],
    year: 2002,
    oscars: 2,
    oscarDetails: ["Best Visual Effects", "Best Sound Editing"],
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin", "Orlando Bloom", "Andy Serkis", "Christopher Lee"],
    director: "Peter Jackson",
    music: "Howard Shore",
    info: "The middle chapter that never gets old: Battle of Helm's Deep, Gollum's show and Sam's speech about the stories that mattered.",
    quote: "There is some good in this world, Mr. Frodo. And it's worth fighting for."
}

// 13: IMDB = 10
const lotrReturnOfTheKing = {
    name: "The Lord of the Rings: The Return of the King",
    rating: 98,
    genres: ["Fantasy", "Adventure", "Drama"],
    year: 2003,
    oscars: 11,
    oscarDetails: ["Best Picture", "Best Director", "Best Adapted Screenplay", "Best Original Score", "Best Original Song", "Best Visual Effects", "Best Film Editing", "Best Art Direction", "Best Costume Design", "Best Makeup", "Best Sound Mixing"],
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin", "Orlando Bloom", "Andy Serkis"],
    director: "Peter Jackson",
    music: "Howard Shore",
    info: "“My friends... You bow to no one!” A clean sweep of 11 Oscars. The most cathartic ending in blockbuster history.",
    quote: "My friends, you bow to no one!"
}

// 14: IMDB = 10
const trumanShow = {
    name: "The Truman Show",
    rating: 98,
    genres: ["Comedy", "Drama", "Sci-Fi"],
    year: 1998,
    oscars: 0,
    actors: ["Jim Carrey", "Ed Harris", "Laura Linney"],
    director: "Peter Weir",
    music: "Burkhard Dallwitz & Philip Glass",
    info: "“In case I don't see you... Good afternoon, good evening and good night”. Decades ahead of its time on reality TV and surveillance.",
    quote: "In case I don't see you... Good afternoon, good evening and good night..."
}

// 15: IMDB = 10
const se7en = {
    name: "Se7en",
    rating: 97,
    genres: ["Crime", "Thriller", "Mystery"],
    year: 1995,
    oscars: 0,
    actors: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
    director: "David Fincher",
    music: "Howard Shore",
    info: "A terrifying descent into the seven deadly sins. “What's in the box?” line seals an ending that no one can forget.",
    quote: "What's in the box?"
}

// 16: IMDB = 10
const potcOnStrangerTides = {
    name: "Pirates of the Caribbean: On Stranger Tides",
    rating: 97,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2011,
    oscars: 0,
    actors: ["Johnny Depp", "Penélope Cruz", "Ian McShane", "Geoffrey Rush"],
    director: "Rob Marshall",
    music: "Hans Zimmer",
    info: "Jack hunts the Fountain of Youth with Blackbeard on his tail. Mermaids, zombies and a unique adventure.",
    quote: "You know that feeling you get when you're standing in a high place, the sudden urge to jump? I don't have it."
}

// 17: IMDB = 10
const potcDeadMenTellNoTales = {
    name: "Pirates of the Caribbean: Dead Men Tell No Tales",
    rating: 97,
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2017,
    oscars: 0,
    actors: ["Johnny Depp", "Javier Bardem", "Kaya Scodelario", "Brenton Thwaites", "Geoffrey Rush"],
    director: "Joachim Rønning & Espen Sandberg",
    music: "Geoff Zanelli",
    info: "Captain Salazar's ghost crew hunts Jack one last time. A nostalgic send-off for the saga.",
    quote: "You must be the worst pirate I've ever heard of."
}

// 18: IMDB = 10
const beautifulMind = {
    name: "A Beautiful Mind",
    rating: 97,
    genres: ["Biography", "Drama"],
    year: 2001,
    oscars: 4,
    oscarDetails: ["Best Picture", "Best Director", "Best Supporting Actress", "Best Adapted Screenplay"],
    actors: ["Russell Crowe", "Jennifer Connelly", "Ed Harris", "Paul Bettany"],
    director: "Ron Howard",
    music: "James Horner",
    info: "The brilliant, troubled mind of John Nash. A story about genius, delusion and the love that anchors a life.",
    quote: "The only thing greater than the power of the mind is the courage of the heart."
}

// 19: IMDB = 10
const primalFear = {
    name: "Primal Fear",
    rating: 97,
    genres: ["Crime", "Drama", "Thriller"],
    year: 1996,
    oscars: 0,
    actors: ["Richard Gere", "Edward Norton", "Laura Linney", "Frances McDormand"],
    director: "Gregory Hoblit",
    music: "James Newton Howard",
    info: "A courtroom thriller about a lawyer defending an altar boy accused of murder. Edward Norton's debut ends with one of the best plot twists ever.",
    quote: "Sooner or later, a man who wears two faces forgets which one is real..."
}

// 20: IMDB = 10
const oppenheimer = {
    name: "Oppenheimer",
    rating: 96,
    genres: ["Biography", "Drama", "History"],
    year: 2023,
    oscars: 7,
    oscarDetails: ["Best Picture", "Best Director", "Best Actor", "Best Supporting Actor", "Best Cinematography", "Best Film Editing", "Best Original Score"],
    actors: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    director: "Christopher Nolan",
    music: "Ludwig Göransson",
    info: "The man who moved the world and then had to live with it. A three-hour symphony of dread and genius.",
    quote: "They won't fear it until they understand it. And they won't understand it until they've used it."
}

// 21: IMDB = 10
const greenMile = {
    name: "The Green Mile",
    rating: 96,
    genres: ["Crime", "Drama", "Fantasy"],
    year: 1999,
    oscars: 0,
    actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    director: "Frank Darabont",
    music: "Thomas Newman",
    info: "“John Coffey - like the drink, but not spelled the same”. A death-row miracle wrapped in heartbreak.",
    quote: "I'm tired, boss. Tired of being on the road, lonely as a sparrow in the rain."
}

// 22: IMDB = 10
const spiderManNoWayHome = {
    name: "Spider-Man: No Way Home",
    rating: 96,
    genres: ["Action", "Adventure", "Sci-Fi"],
    year: 2021,
    oscars: 0,
    actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon", "Marisa Tomei"],
    director: "Jon Watts",
    music: "Michael Giacchino",
    info: "The multiverse cracks open and three Spider-Men share the same screen. Fan service done right.",
    quote: "With great power comes great responsibility."
}

// 23: IMDB = 10
const interstellar = {
    name: "Interstellar",
    rating: 95,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    year: 2014,
    oscars: 1,
    oscarDetails: ["Best Visual Effects"],
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Mackenzie Foy", "Michael Caine"],
    director: "Christopher Nolan",
    music: "Hans Zimmer",
    info: "A love letter to space, time and the bond between a father and daughter. Zimmer's organ score hits like a force of nature.",
    quote: "Mankind was born on Earth. It was never meant to die here."
}

// 24: IMDB = 10
const usualSuspects = {
    name: "The Usual Suspects",
    rating: 95,
    genres: ["Crime", "Mystery", "Thriller"],
    year: 1995,
    oscars: 2,
    oscarDetails: ["Best Supporting Actor", "Best Original Screenplay"],
    actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio del Toro", "Kevin Pollak", "Stephen Baldwin"],
    director: "Bryan Singer",
    music: "John Ottman",
    info: "“And like that... he's gone”. Maybe, the greatest twist ever in con-man cinema. The viewers will doubt themselves multiple times.",
    quote: "The greatest trick the Devil ever pulled was convincing the world he didn't exist."
}

// 25: IMDB = 10
const inception = {
    name: "Inception",
    rating: 95,
    genres: ["Sci-Fi", "Action", "Thriller"],
    year: 2010,
    oscars: 4,
    oscarDetails: ["Best Cinematography", "Best Visual Effects", "Best Sound Editing", "Best Sound Mixing"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Marion Cotillard", "Tom Hardy", "Elliot Page", "Ken Watanabe"],
    director: "Christopher Nolan",
    music: "Hans Zimmer",
    info: "A dream within a dream within a dream. The spinning top still hasn't fallen.",
    quote: "An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow."
}

// 26: IMDB = 10
const angelsAndDemons = {
    name: "Angels & Demons",
    rating: 94,
    genres: ["Mystery", "Thriller"],
    year: 2009,
    oscars: 0,
    actors: ["Tom Hanks", "Ewan McGregor", "Ayelet Zurer", "Stellan Skarsgård"],
    director: "Ron Howard",
    music: "Hans Zimmer",
    info: "Robert Langdon races through Rome against the clock to stop an Illuminati plot against the Vatican. Fast, clever and full of symbols.",
    quote: "Science and religion are not at odds."
}

// 27: IMDB = 10
const insideOut = {
    name: "Inside Out",
    rating: 94,
    genres: ["Animation", "Adventure", "Comedy"],
    year: "2015 & 2024",
    oscars: 1,
    oscarDetails: ["Best Animated Feature (2015)"],
    actors: ["Amy Poehler", "Phyllis Smith", "Bill Hader", "Lewis Black", "Mindy Kaling"],
    director: "Pete Docter",
    music: "Michael Giacchino",
    info: "Pixar maps the inside of a child's head and breaks your heart with a memory called Bing Bong.",
    quote: "Crying helps me slow down and obsess over the weight of life's problems."
}

// 28: IMDB = 10
const pressure = {
    name: "Pressure",
    rating: 93,
    genres: ["Drama", "History", "War"],
    year: 2026,
    oscars: 0,
    actors: ["Andrew Scott", "Brendan Fraser"],
    director: "Anthony Maras",
    music: "Volker Bertelmann",
    info: "“OK, we'll go.” The three days before D-Day, decided not by generals, but by a weather forecast.",
    quote: "The fate of the war hinges on this. There's only one imponderable left. I need a forecast."
}

// 29: IMDB = 10
const schindlersList = {
    name: "Schindler's List",
    rating: 93,
    genres: ["Biography", "Drama", "History"],
    year: 1993,
    oscars: 7,
    oscarDetails: ["Best Picture", "Best Director", "Best Adapted Screenplay", "Best Cinematography", "Best Film Editing", "Best Original Score", "Best Production Design"],
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    director: "Steven Spielberg",
    music: "John Williams",
    info: "“Whoever saves one life saves the world entire.” Devastating, essential filmmaking, based on a true story.",
    quote: "Whoever saves one life, saves the world entire."
}

// 30: IMDB = 9
const zodiac = {
    name: "Zodiac",
    rating: 92,
    genres: ["Crime", "Drama", "Mystery"],
    year: 2007,
    oscars: 0,
    actors: ["Jake Gyllenhaal", "Robert Downey Jr.", "Mark Ruffalo"],
    director: "David Fincher",
    music: "David Shire",
    info: "An obsessive and meticulous hunt for a killer who was never caught. Based on a true story. Procedural filmmaking at its finest.",
    quote: "I'm not the Zodiac. And if I were, I certainly wouldn't tell you."
}

// 31: IMDB = 9
const parasite = {
    name: "Parasite",
    rating: 91,
    genres: ["Drama", "Thriller", "Comedy"],
    year: 2019,
    oscars: 4,
    oscarDetails: ["Best Picture", "Best Director", "Best Original Screenplay", "Best International Feature"],
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"],
    director: "Bong Joon-ho",
    music: "Jung Jae-il",
    info: "A razor-sharp class satire that turns on a horror story within minutes. The first non-English film to win Best Picture.",
    quote: "You know what kind of plan never fails? No plan. No plan at all."
}

// 32: IMDB = 9
const departed = {
    name: "The Departed",
    rating: 90,
    genres: ["Crime", "Drama", "Thriller"],
    year: 2006,
    oscars: 4,
    oscarDetails: ["Best Picture", "Best Director", "Best Adapted Screenplay", "Best Film Editing"],
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
    director: "Martin Scorsese",
    music: "Howard Shore",
    info: "Cops and rats in Boston, each hunting the other. The film that finally won Scorsese his well-deserving Oscar.",
    quote: "I don't want to be a product of my environment. I want my environment to be a product of me."
}

// 33: IMDB = 9
const butterflyEffect = {
    name: "The Butterfly Effect",
    rating: 90,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    year: 2004,
    oscars: 0,
    actors: ["Ashton Kutcher", "Amy Smart", "Eric Stoltz", "Elden Henson"],
    director: "Eric Bress & J. Mackye Gruber",
    music: "Michael Suby",
    info: "Every small change in the past rewrites the present. A dark, mind-bending ride about how one choice can ruin or save everything.",
    quote: "A butterfly can flap its wings in Central Park and cause a hurricane in China."
}

// 34: IMDB = 9
const dune = {
    name: "Dune",
    rating: 89,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    year: 2021,
    oscars: 6,
    oscarDetails: ["Best Cinematography", "Best Original Score", "Best Visual Effects", "Best Film Editing", "Best Production Design", "Best Sound"],
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya", "Oscar Isaac", "Jason Momoa"],
    director: "Denis Villeneuve",
    music: "Hans Zimmer",
    info: "Sci-fi on the grandest possible scale. Planet Arrakis has never looked or sounded so vast.",
    quote: "Dreams make good stories, but everything important happens when we're awake."
}

// 35: IMDB = 9
const mandalorianAndGrogu = {
    name: "The Mandalorian and Grogu",
    rating: 88,
    genres: ["Sci-Fi", "Action", "Adventure"],
    year: 2026,
    oscars: 0,
    actors: ["Pedro Pascal", "Sigourney Weaver", "Jeremy Allen White"],
    director: "Jon Favreau",
    music: "Ludwig Göransson",
    info: "The first big-screen Mandalorian adventure alongside Grogu, a story full of unexpected events.",
    quote: "The old protect the young, and then the young protect the old. This is the Way."
}

// 36: IMDB = 9
const hamnet = {
    name: "Hamnet",
    rating: 88,
    genres: ["Drama", "History"],
    year: 2025,
    oscars: 0,
    actors: ["Jessie Buckley", "Paul Mescal", "Emily Watson", "James Lintern"],
    director: "Chloé Zhao",
    music: "Max Richter",
    info: "An adaptation of Maggie O'Farrell's novel about Shakespeare's family and grief.",
    quote: "He loves me for what I am, not what I ought to be."
}

// 37: IMDB = 9
const intouchables = {
    name: "The Intouchables",
    rating: 87,
    genres: ["Biography", "Comedy", "Drama"],
    year: 2011,
    oscars: 0,
    actors: ["François Cluzet", "Omar Sy", "Anne Le Ny"],
    director: "Olivier Nakache & Éric Toledano",
    music: "Ludovico Einaudi",
    info: "An unlikely friendship between a paralysed aristocrat and his carer. Warm, funny and genuinely moving.",
    quote: "Sometimes you have to reach into someone else's world to find out what's missing in your own."
}

// 38: IMDB = 8
const sherlockHolmes = {
    name: "Sherlock Holmes",
    rating: 86,
    genres: ["Action", "Adventure", "Mystery"],
    year: 2009,
    oscars: 0,
    actors: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"],
    director: "Guy Ritchie",
    music: "Hans Zimmer",
    info: "A dynamic witty reinvention of Holmes as a genius who seeks troubles. RDJ and Jude Law have perfect chemistry.",
    quote: "I have been reliably informed that I have a pathological need to be the smartest person in the room."
}

// 39: IMDB = 8
const sherlockHolmesGameOfShadows = {
    name: "Sherlock Holmes: A Game of Shadows",
    rating: 86,
    genres: ["Action", "Adventure", "Mystery"],
    year: 2011,
    oscars: 0,
    actors: ["Robert Downey Jr.", "Jude Law", "Jared Harris"],
    director: "Guy Ritchie",
    music: "Hans Zimmer",
    info: "Holmes faces off against Moriarty. Bigger, bolder and as much fun as the first one.",
    quote: "I may be on the side of the angels, but don't think for one second that I am one of them."
}

// 40: IMDB = 9
const theOdyssey = {
    name: "The Odyssey",
    rating: 85,
    genres: ["Adventure", "Fantasy", "Drama"],
    year: 2026,
    oscars: 0,
    actors: ["Matt Damon", "Tom Holland", "Anne Hathaway", "Zendaya", "Robert Pattinson", "Charlize Theron"],
    director: "Christopher Nolan",
    music: "Ludwig Göransson",
    info: "Nolan takes on Homer. Ten years of Odysseus fighting his way home, shot entirely on IMAX film. The impressing about this movie is the wide use of practical effects like real sets, real locations and physical props with minimal CGI.",
    quote: "There is no home for a man who has lost his way."
}

// 41: IMDB = 9
const carryOn = {
    name: "Carry-On",
    rating: 85,
    genres: ["Action", "Thriller"],
    year: 2024,
    oscars: 0,
    actors: ["Taron Egerton", "Jason Bateman", "Sofia Carson"],
    director: "Jaume Collet-Serra",
    music: "Lorne Balfe",
    info: "A young TSA agent is blackmailed into letting a dangerous package onto a flight. A tight Christmas-set thriller.",
    quote: "Sometimes the hardest part of moving forward is letting go."
}

// 42: IMDB = 8
const inglouriousBasterds = {
    name: "Inglourious Basterds",
    rating: 84,
    genres: ["War", "Thriller",  "Alternate History"],
    year: 2009,
    oscars: 1,
    oscarDetails: ["Best Supporting Actor"],
    actors: ["Brad Pitt", "Christoph Waltz", "Mélanie Laurent", "Michael Fassbender", "Diane Kruger"],
    director: "Quentin Tarantino",
    music: "Ennio Morricone and more",
    info: "A WW2 revenge fantasy with the greatest opening scene Tarantino ever wrote. Waltz is electric.",
    quote: "That's a bingo! Is that the way you say it? 'That's a bingo'?"
}

// 43: IMDB = 8
const catchMeIfYouCan = {
    name: "Catch Me If You Can",
    rating: 84,
    genres: ["Biography", "Crime", "Drama"],
    year: 2002,
    oscars: 0,
    actors: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"],
    director: "Steven Spielberg",
    music: "John Williams",
    info: "A charming cat-and-mouse story based on the real Frank Abagnale. Breezy, shiny and effortlessly fun.",
    quote: "I'm not the person you think I am."
}

// 44: IMDB = 9
const sixthSense = {
    name: "The Sixth Sense",
    rating: 84,
    genres: ["Drama", "Mystery", "Thriller"],
    year: 1999,
    oscars: 0,
    actors: ["Bruce Willis", "Haley Joel Osment", "Toni Collette", "Olivia Williams"],
    director: "M. Night Shyamalan",
    music: "James Newton Howard",
    info: "“I see dead people.” A unique story with a twist that changed how audiences watch movies.",
    quote: "I see dead people."
}

// 45: IMDB = 8
const sinners = {
    name: "Sinners",
    rating: 83,
    genres: ["Horror", "Thriller", "Drama"],
    year: 2025,
    oscars: 4,
    oscarDetails: ["Best Actor", "Best Original Screenplay", "Best Original Score", "Best Cinematography"],
    actors: ["Michael B. Jordan", "Miles Caton", "Saul Williams", "Jack O'Connell", "Andrene Ward-Hammond"],
    director: "Ryan Coogler",
    music: "Ludwig Göransson",
    info: "A genre-bending period horror from Ryan Coogler with Michael Jordan winning the Oscar for playing the twins.",
    quote: "See, white folks, they like the blues just fine. They just don't like the people who make it."
}

// 46: IMDB = 8
const pulpFiction = {
    name: "Pulp Fiction",
    rating: 82,
    genres: ["Crime", "Drama"],
    year: 1994,
    oscars: 1,
    oscarDetails: ["Best Original Screenplay"],
    actors: ["John Travolta", "Samuel L. Jackson", "Bruce Willis", "Uma Thurman", "Harvey Keitel"],
    director: "Quentin Tarantino",
    music: "Famous tracks used",
    info: "Tarantino reorders time and rewrites the story in a cool way. Endlessly quotable and impossibly stylish.",
    quote: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men... And you will know my name is the Lord when I lay my vengeance upon you."
}

// 47: IMDB = 8
const fargo = {
    name: "Fargo",
    rating: 81,
    genres: ["Crime", "Drama", "Thriller"],
    year: 1996,
    oscars: 2,
    oscarDetails: ["Best Actress", "Best Original Screenplay"],
    actors: ["Frances McDormand", "William H. Macy", "Steve Buscemi", "Peter Stormare"],
    director: "Joel & Ethan Coen",
    music: "Carter Burwell",
    info: "“And for what? For a little bit of money.” A kidnapping story in snowy Minnesota and a pregnant police chief who sees through it all.",
    quote: "And it's a beautiful day. I just don't understand it."
}

// 48: IMDB = 8
const jokerFolieADeux = {
    name: "Joker: Folie à Deux",
    rating: 81,
    genres: ["Crime", "Drama", "Musical"],
    year: 2024,
    oscars: 0,
    actors: ["Joaquin Phoenix", "Lady Gaga", "Brendan Gleeson"],
    director: "Todd Phillips",
    music: "Hildur Guðnadóttir",
    info: "A musical sequel that takes Arthur Fleck to Arkham and the courtroom, dividing the fans.",
    quote: "That's life."
}

// 49: IMDB = 8
const deadPoetsSociety = {
    name: "Dead Poets Society",
    rating: 80,
    genres: ["Drama", "Comedy"],
    year: 1989,
    oscars: 1,
    oscarDetails: ["Best Original Screenplay"],
    actors: ["Robin Williams", "Robert Sean Leonard", "Ethan Hawke"],
    director: "Peter Weir",
    music: "Maurice Jarre",
    info: "“O Captain! My Captain!” “Carpe diem!” A teacher who changes everything and inspires the students in a society with outdated ideas.",
    quote: "O Captain! My Captain! Carpe diem!"
}




// List of movies
const movies = [
    shawshankRedemption,
    forrestGump,
    prestige,
    vForVendetta,
    joker,
    shutterIsland,
    darkKnight,
    potcBlackPearl,
    potcDeadMansChest,
    potcAtWorldsEnd,
    lotrFellowship,
    lotrTwoTowers,
    lotrReturnOfTheKing,
    trumanShow,
    se7en,
    potcOnStrangerTides,
    potcDeadMenTellNoTales,
    beautifulMind,
    primalFear,
    oppenheimer,
    greenMile,
    spiderManNoWayHome,
    interstellar,
    usualSuspects,
    inception,
    angelsAndDemons,
    insideOut,
    pressure,
    schindlersList,
    zodiac,
    parasite,
    departed,
    butterflyEffect,
    dune,
    mandalorianAndGrogu,
    hamnet,
    intouchables,
    sherlockHolmes,
    sherlockHolmesGameOfShadows,
    theOdyssey,
    carryOn,
    inglouriousBasterds,
    catchMeIfYouCan,
    sixthSense,
    sinners,
    pulpFiction,
    fargo,
    jokerFolieADeux,
    deadPoetsSociety
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

    <div class="genres">${genreChips}</div>

    <div class="details">
      <div class="detail-row">
        <span class="detail-label">Starring</span>
        <span class="detail-value">${actors}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Director</span>
        <span class="detail-value">${escapeHtml(movie.director)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Music</span>
        <span class="detail-value">${escapeHtml(movie.music)}</span>
      </div>
    </div>

    <p class="info">${escapeHtml(movie.quote || movie.info)}</p>

    ${oscarsBlock}
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

  [...movies]
    .sort((a, b) => b.rating - a.rating)
    .forEach((movie) => grid.appendChild(createMovieCard(movie)));
}

document.addEventListener("DOMContentLoaded", renderMovies);
