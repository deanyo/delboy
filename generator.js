// Del Boy Drink Generator
// Patterns extracted from 49 confirmed script drinks:
//
// Pattern 1: POSH SPIRIT + WRONG SOFT DRINK (the classic Del)
//   Tia Maria + Lucozade, Rémy Martin + Cream Soda, Campari + Diet Coke,
//   Chivas Regal + Coke, Dubonnet + Coke, Malibu + Cherryade
//
// Pattern 2: POSH SPIRIT + WRONG FRUIT JUICE
//   Grand Marnier + Grapefruit, Grand Marnier + Orange,
//   Tia Maria + Pineapple Juice, Benedictine + Lemonade
//
// Pattern 3: SPIRIT + MEDICINAL/BIZARRE ADDITION
//   Pina Colada + Alka-Seltzer, Brandy + Cream Soda
//
// Pattern 4: REAL COCKTAIL NAME (said confidently, often wrong)
//   Caribbean Stallion, Tequila Sunset (made with gin), Manhattan,
//   Singapore Sling, Peach Daiquiri, Banana Daiquiri, Cuba Libre
//
// Pattern 5: POSH WINE/SPIRIT (mispronounced or misunderstood)
//   Vin Ordinaire (thinks it's posh), Beaujolais Nouveau '79,
//   Armagnac (thinks it's not brandy), Spritzer ("Spitzer")

const spirits = [
  'Tia Maria', 'Grand Marnier', 'Rémy Martin', 'Campari',
  'Dubonnet', 'Malibu', 'Bacardi', 'Drambuie', 'Pernod',
  'Benedictine', 'Cointreau', 'Kahlúa', 'Galliano',
  'Amaretto', 'Sambuca', 'Chartreuse', 'Advocaat',
  'Courvoisier', 'Hennessy', 'Baileys', 'Midori',
  'Frangelico', 'Chambord', 'Crème de Menthe',
  'Crème de Cassis', 'Parfait Amour', 'Strega',
  'Limoncello', 'Disaronno', 'Archers'
];

const wrongMixers = [
  'Lucozade', 'Cherryade', 'Cream Soda', 'Diet Coke',
  'Irn-Bru', 'Tizer', 'Dandelion and Burdock', 'Vimto',
  'Ribena', 'Um Bongo', 'Lilt', 'Dr Pepper',
  'Orangina', 'R Whites Lemonade', 'Panda Pops',
  'Tango', 'Fanta', 'Limeade', 'Soda Stream Cola',
  'Barley Water', 'Horlicks', 'Ovaltine', 'Bovril',
  'Ginger Beer', 'Cream of Soda', 'Bitter Lemon',
  'American Cream Soda', 'Bubblegum Soda', 'Slush Puppie',
  'Blackcurrant Cordial', 'Ribena', 'Tango'
];

const wrongJuices = [
  'Grapefruit Juice', 'Pineapple Juice', 'Prune Juice',
  'Tomato Juice', 'Carrot Juice', 'Mango Juice',
  'Guava Nectar', 'Passion Fruit Juice', 'Cranberry Juice',
  'Pomegranate Juice', 'Lychee Juice', 'Papaya Juice'
];

const bizarreAdditions = [
  'Alka-Seltzer', 'a Berocca', 'a Rennie',
  'a splash of Gaviscon', 'two Disprin',
  'a Lemsip', 'a vitamin C tablet',
  'a spoonful of Andrews', 'a Dioralyte sachet',
  'a Resolve', 'a fizzy Redoxon', 'a crushed Rennies',
  'a Yakult', 'a spoonful of Calpol', 'a Strepsil'
];

const garnishes = [
  'a cocktail umbrella', 'a sparkler', 'a curly straw',
  'a slice of lemon', 'a maraschino cherry', 'two olives on a stick',
  'a pineapple chunk', 'a paper parasol', 'a bendy straw',
  'a slice of kiwi', 'a glacé cherry', 'a swizzle stick',
  'a wedge of lime', 'a sprig of mint', 'lots of ice'
];

const realCocktails = [
  'Caribbean', 'Tropical', 'Peckham', 'Bermuda', 'Tahitian',
  'Moroccan', 'Brazilian', 'Jamaican', 'Hawaiian', 'Balearic',
  'Monte Carlo', 'Acapulco', 'Copacabana', 'Riviera', 'Barbados'
];

const cocktailNouns = [
  'Stallion', 'Sunset', 'Sunrise', 'Thunder', 'Lightning',
  'Breeze', 'Dream', 'Explosion', 'Meltdown', 'Inferno',
  'Paradise', 'Tornado', 'Tsunami', 'Volcano', 'Hurricane',
  'Blizzard', 'Avalanche', 'Monsoon', 'Eclipse', 'Odyssey',
  'Wallbanger', 'Slammer', 'Snowball', 'Sling', 'Fizz',
  'Colada', 'Daiquiri', 'Libre', 'Reef', 'Diesel'
];

const delPronunciations = [
  { word: 'Châteauneuf-du-Pape', del: 'Chateau Neuf de Pap' },
  { word: 'Crème de la Crème', del: 'Creme de la Menthe' },
  { word: 'Hors d\'oeuvres', del: 'Hors doovers' },
  { word: 'Entrepreneur', del: 'Entrer-manure' },
  { word: 'Au fait', del: 'Oh fate' },
  { word: 'Coup de grâce', del: 'Coupe de grass' },
  { word: 'Pièce de résistance', del: 'Piece de resistance' },
  { word: 'Carte blanche', del: 'Cot blanch' },
  { word: 'Déjà vu', del: 'Deja voo' },
  { word: 'Fiancée', del: 'Fee-on-say' },
  { word: 'Ménage à trois', del: 'Menage a twah' },
  { word: 'Bon appétit', del: 'Bone appeteet' },
  { word: 'Raison d\'être', del: 'Raisin detra' },
  { word: 'Fait accompli', del: 'Fate accomplee' }
];

const delQuotes = [
  // Del's French
  "Creme de la menthe!",
  "Fromage frais!",
  "Joie de vivre!",
  "Pot pourri!",
  "Voila!",
  "Pas de Calais!",
  "Plume de ma tante!",
  "Menage a trois!",
  "Mais oui!",
  "Mon dieu!",
  "Au contraire!",
  "Tres bien ensemble!",
  "Fabrique belgique!",
  "Bain marie!",
  "Oeuf sur la plat!",
  "Chateauneuf du Pape!",
  "Boeuf a la mode!",
  "Allemagne dix points!",
  "Je suis, je reste!",
  "Argent comptant!",
  "Bonnet de douche!",
  "Mange tout, Rodney, mange tout!",
  // Del's multilingual
  "Si danke schon, bonjour!",
  "Münchengladbach!",
  "Bonetti bonetti!",
  "Di stefano!",
  "Puscas puscas!",
  // Catchphrases
  "Lovely jubbly!",
  "He who dares, wins!",
  "Cushty!",
  "Bonjour!",
  "You plonker, Rodney!",
  "This time next year, we'll be millionaires!",
  // Bar & sales
  "That's a classy drink, that is.",
  "Only the best for Del Boy.",
  "Make mine a large one.",
  "It's a guaranteed earner.",
  "A nice little earner.",
  "I know a bloke.",
  "Leave it to Uncle Del.",
  "Trust me on this one.",
  "You know it makes sense.",
  "Play it nice and cool.",
  "Stick with me, Rodney.",
  "What a wally.",
  "Use your loaf.",
  "Do me a favour.",
  "Très sophisticated.",
  "Très continental."
];

const delDescriptions = [
  "Very popular in the West End.",
  "It's continental, innit?",
  "They drink this in all the top wine bars.",
  "I had one of these in Monte Carlo once.",
  "Rodney, this is what the jet set drink.",
  "Trust me, I know what I'm doing.",
  "You won't get this in your local Wetherspoons.",
  "The barman at the Hilton taught me this one.",
  "Very sophistimacated.",
  "This is what they serve at Henley.",
  "As drunk by all the top Euro businessmen.",
  "It's what they have at Ascot.",
  "Del Boy's special. He who dares, drinks!",
  "Straight from the cocktail bars of Peckham.",
  "You can't get this in Margate.",
  "A drink for the true connoisseur.",
  "They were knocking these back at Cannes.",
  "Trigger had three of these and fell off his stool.",
  "Boycie reckons it's common but what does he know?",
  "Mike had to order in special glasses for this one.",
  "Goes lovely with a bit of pate foie gras.",
  "Only the best for Del Boy.",
  "That's a classy drink, that is.",
  "Make mine a large one.",
  "It's a guaranteed earner.",
  "Stick with me, Rodney."
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickDesc() { return pick(delDescriptions); }

const delProducts = [
  {
    name: "Peckham Spring Water",
    spiel: "From a natural and ancient source.",
    reality: "It's from the Thames. You can't get more ancient and natural than that!"
  },
  {
    name: "Trotter's Pre-Blessed Wine",
    spiel: "The church'll be rejoicing, the flock'll be redeemed. Rein a dire, rein a faire as they say in Lourdes.",
    reality: "Romanian wine, blessed by the lorry load. Happens to be white wine for communion."
  },
  {
    name: "Vintage Beaujolais White Wine",
    spiel: "Pressed from the finest grapes in France. 5 year old Beaujolais Nouveau as drunk by Jean-Claude van Damme.",
    reality: "Beaujolais Nouveau is RED and should be consumed within 6 months. This is white."
  },
  {
    name: "Romanian Riesling",
    spiel: "A cheeky little number from the Carpathian foothills. Very popular with the cognoscenti.",
    reality: "Dodgy plonk Del flogged to the Nag's Head. Mike's still serving the dregs."
  },
  {
    name: "Beaujolais Nouveau '79",
    spiel: "A vintage year. Pressed from the finest grapes in France.",
    reality: "Nouveau means this year's vintage. There is no '79. The girls laughed."
  },
  {
    name: "Del's Tequila Sunset",
    spiel: "An exotic cocktail of my own creation. Very popular in the West End.",
    reality: "Made with gin because he ran out of tequila. Miranda noticed."
  }
];

const delProductTemplates = [
  "Trotters Independent Traders",
  "Peckham",
  "Trotter's",
  "Del Boy's",
  "TITCO",
  "Nelson Mandela House"
];

const fakeDrinkProducts = [
  "Sparkling Mineral Water", "Premium Tonic Water", "Artisan Lemonade",
  "Craft Ginger Beer", "Organic Elderflower Pressé", "Vintage Cream Soda",
  "Alpine Spring Water", "Mediterranean Lemon Squash", "Estate Bottled Cordial",
  "Single Origin Cola", "Hand-Pressed Apple Juice", "Botanical Fizz"
];

const productSpiels = [
  "Sourced from the finest springs in South East London.",
  "As served at all the top restaurants in Mayfair.",
  "Imported direct from the continent. Well, Calais.",
  "Winner of the Peckham Business Award three years running.",
  "As recommended by Harley Street doctors. Probably.",
  "Available exclusively through Trotters Independent Traders.",
  "Hand-bottled at our Peckham facility. The bathroom.",
  "Endorsed by European royalty. Well, a bloke Del met in Benidorm.",
  "Featured in the Financial Times. Well, it was wrapped in it.",
  "As drunk by Jean-Claude van Damme. Probably.",
  "Organic, free-range, and completely above board. Honest.",
  "From a recipe passed down through generations of Trotters."
];

const productRealities = [
  "It's tap water with a fancy label.",
  "Fell off the back of a lorry in Bermondsey.",
  "Best before date was last Christmas.",
  "The trading standards are already asking questions.",
  "Trigger's been using it to water his plants.",
  "Boycie wouldn't touch it with a bargepole.",
  "Mike banned it from the Nag's Head after the first batch.",
  "Rodney found the bottling plant. It's the kitchen sink.",
  "Denzil's been storing it in his lorry for six months.",
  "The label fell off in the rain. Twice.",
  "Albert drank some and was in bed for a week.",
  "Marlene used it to strip paint off the garage door."
];

function generateProduct() {
  if (Math.random() < 0.4) {
    const p = pick(delProducts);
    return { name: p.name, description: `"${p.spiel}"`, reality: p.reality };
  }
  const tmpl = pick(delProductTemplates);
  const product = pick(fakeDrinkProducts);
  const name = `${tmpl} ${product}`;
  return { name, description: `"${pick(productSpiels)}"`, reality: pick(productRealities) };
}

function generateDrink() {
  const pattern = Math.random();

  let name, description, quote;

  if (pattern < 0.30) {
    const spirit = pick(spirits);
    const mixer = pick(wrongMixers);
    name = `${spirit} and ${mixer}`;
    description = pickDesc();
  } else if (pattern < 0.45) {
    const spirit = pick(spirits);
    const juice = pick(wrongJuices);
    name = `${spirit} and ${juice}`;
    description = pickDesc();
  } else if (pattern < 0.58) {
    const spirit = pick(spirits);
    const mixer = pick([...wrongMixers, ...wrongJuices]);
    const bizarre = pick(bizarreAdditions);
    name = `${spirit} and ${mixer} with ${bizarre}`;
    description = pickDesc();
  } else if (pattern < 0.72) {
    const place = pick(realCocktails);
    const noun = pick(cocktailNouns);
    const garnish = pick(garnishes);
    name = `${place} ${noun}`;
    description = `It's an exotic cocktail, ain't it? Served with ${garnish}. ${pick(delDescriptions).split('.').pop().trim()}`;
  } else if (pattern < 0.85) {
    const posh = pick(delPronunciations);
    const garnish = pick(garnishes);
    name = posh.del;
    description = `Del meant "${posh.word}". Served with ${garnish}. ${pick(delDescriptions).split('.').pop().trim()}`;
  } else {
    // Pattern 6: Del's Dodgy Products
    const p = generateProduct();
    name = p.name;
    description = p.description;
    quote = p.reality;
    return { name, description, quote: `The real deal: ${quote}` };
  }

  quote = pick(delQuotes);
  return { name, description, quote };
}

if (typeof module !== 'undefined') module.exports = { generateDrink };
