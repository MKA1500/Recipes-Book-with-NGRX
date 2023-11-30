const express = require('express');
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let savedRecipies = [
  {
    name: 'Sznycel Wiedeński',
    description: 'Sznycel wiedeński to kotlet z mięsa z udźca cielęcego panierowany  w mące, jajku i bułce tartej. Tradycyjnie smażony na klarowanym maśle i podawany z cząstką cytryny. Klasycznym dodatkiem do Wiener Schnitzel jest sałatka ziemniaczana.',
    imagePath: 'http://cdn12.beszamel.smcloud.net/t/thumbs/660/441/1/user_photos/ThinkstockPhotos-535423530.jpg',
    ingredients: [
      {
        name: 'kotlet cielęcy',
        amount: 4
      },
      {
        name: 'mąka',
        amount: 1
      },
      {
        name: 'jajka',
        amount: 2
      },
      {
        name: 'bułka tarta',
        amount: 1
      },
      {
        name: 'sól',
        amount: 1
      },
      {
        name: 'olej',
        amount: 1
      },
      {
        name: 'masło',
        amount: 1
      },
      {
        name: 'cytryna',
        amount: 1
      },
    ]
  },
  {
    name: 'Kanapka z jajkiem i awokado',
    description: 'Kanapka z awokado i jajkiem to propozycja na śniadanie albo pomysł na pyszną przekąskę, którą przygotujemy w kilka chwil. Zapraszam Was także na grzanki z awokado i pomidorkami oraz pastę kanapkową z awokado.',
    imagePath: 'http://bi.im-g.pl/im/8f/ae/16/z23783567IF,Pelnowartosciowe-zrodla-bialka--to-miedzy-innymi-m.jpg',
    ingredients: [
      {
        name: 'jajka',
        amount: 2
      },
      {
        name: 'awokado',
        amount: 2
      },
      {
        name: 'chleb',
        amount: 1
      },
      {
        name: 'majonez',
        amount: 1
      },
      {
        name: 'cebula',
        amount: 1
      },
      {
        name: 'rukola',
        amount: 1
      },
    ]
  },
  {
    name: 'Mohito',
    description: 'Drink mojito to jeden z najpopularniejszych koktajli na świecie. Jak zrobić mojito? Zobacz sprawdzony przepis na mojito prosto ze słonecznej Kuby!',
    imagePath: 'http://bi.im-g.pl/im/b9/ab/16/z23770809IF,Mojito-to-doskonaly-sposob-na-orzezwienie-w-cieple.jpg',
    ingredients: [
      {
        name: 'limonka',
        amount: 1
      },
      {
        name: 'cukier',
        amount: 2
      },
      {
        name: 'mięta',
        amount: 3
      },
      {
        name: 'rum',
        amount: 1
      },
      {
        name: 'kostka lodu',
        amount: 4
      },
    ]
  }
];

app.post('/api/recipes', (req, res) => {
  savedRecipies = req.body;
  res.send(savedRecipies);
  console.log('app.post /api/recipes', savedRecipies);
});

app.get('/api/recipes', (req, res) => {
  res.send(savedRecipies);
  console.log('app.get /api/recipes', savedRecipies);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
