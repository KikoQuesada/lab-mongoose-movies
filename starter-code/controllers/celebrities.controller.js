const createError = require('http-errors')
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

module.exports.create = (req, res, next) => {
    res.render('celebrities/new');
};

module.exports.doCreate = (req, res, next) => {
    Celebrity.create(req.body)

        .then((celebrity) => res.redirect(`/celebrities/${celebrity.id}`))
        .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('celebrities/new', {
                    errors: error.errors,
                    celebrities: req.body,
                });
            }else {
                next(error);
            }
        });
};