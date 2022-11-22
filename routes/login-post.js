// login user with login form
const express = require('express');
const router  = express.Router();
const app = express();

const cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));


router.post('/', (req, res) => {

  //sets cookie session
  req.session.id = 123;

  res.redirect('restaurant');
});

module.exports = router;
