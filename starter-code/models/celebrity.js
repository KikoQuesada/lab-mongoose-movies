const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
    name: {
        type: String,
        require: 'The celebrity needs a name',
        
    },
    occupation: {
        type: String,
        require: 'The celebrity needs an occupation',
        
    },
    catchPhrase: {
        type: String,
        require: 'The celebrity needs a catch phrase',
        
    },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;