// With Express router, 
// we first import Express
// and save it as a vairable

var express = require('express')
var router = express.Router()

// declare middleware
router.use(function timeLog (req, res) {
  do something
})

// and declare a root route:

router.get('/', function (req, res) {
  res.send('Your reached the root')
})
// we can export router
// as shown below:

module.exports = router

// We can then require router in other routes
// so the / in other routes will be the
// end of the previous route.