// Takes user to login page to
var cookieSession = require('cookie-session')
const express = require('express');
const router  = express.Router();
const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))


router.get('/', (req, res) => {
  res.render('login');
});

module.exports = router;
