const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebrities => res.render('celebrities/list', { celebrities }))
        .catch(next);
};

module.exports.detail = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            if(celebrity) {
                res.render('celebrities/detail', {celebrity});
            }else {
                res.render('/celebrities');
            }
        })
        .catch(next);
};