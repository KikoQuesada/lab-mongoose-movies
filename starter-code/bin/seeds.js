const Celebrity = require('../models/celebrity');
const dbConfig = require('../config/db.config');



const celebrities = [
    {
        name: 'Bruce Willis',
        occupation: 'Actor',
        catchPhrase: 'Yippie-Kai-Yay, MotherFucker!'
    },
    {
        name: 'Bruce Lee',
        occupation: 'Martial Arts Master',
        catchPhrase: 'Be like water'
    },
    {
        name: 'Ignatius Farray',
        occupation: 'Comedian',
        catchPhrase: 'All right!'
    }
];

Celebrity.create(celebrities)
    .then((celebrities) => console.info('Initial celebrities added!'));