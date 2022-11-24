const express = require('express');
const router  = express.Router();
const app = express();

const cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));


//Login user using login form
router.post('/', (req, res) => {

  console.log('login Req.body' ,req.body.username)

  //if user is admin set admin cookie
  if (req.body.username === 'admin'){
    req.session.id = 'admin'
    return res.redirect('/admin')
  }

  //sets cookie session
  req.session.id = 123;

  res.redirect('restaurant');
});

module.exports = router;
