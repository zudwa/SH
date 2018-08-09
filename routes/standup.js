var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var date = new Date();
  var options = {weekday: "long", day:"2-digit", month: "long"};
  res.render('standup', { date: date.toLocaleDateString("en-US", options) });
});
router.get('/start', function(req, res, next) {
  res.send('you pushed start button mf?');
});

module.exports = router;
