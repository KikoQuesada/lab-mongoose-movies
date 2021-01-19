const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebrities => res.render('celebrities/list', { celebrities }))
        .catch(next);
};