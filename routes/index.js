var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.json({ working: 'Yes en ingles 3' })
});

module.exports = router;
