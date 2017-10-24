var express = require('express');
var router = express.Router();

/**
 * Front page.
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ship work - logger' });
});

/**
 * Logged in app location.
 */
router.get('/content', isLoggedIn, function(req, res, next) {
  res.send('FISKER');
});

// Helper function ensure user is logged in.
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
}

module.exports = router;
