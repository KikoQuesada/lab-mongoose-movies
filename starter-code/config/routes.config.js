const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');
const celebritiesController = require('../controllers/celebrities.controller');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', celebritiesController.list);
router.get('/celebrities/:id', celebritiesController.detail);

module.exports = router;
