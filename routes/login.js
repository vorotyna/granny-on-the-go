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

  if (!req.session.id){
    const templateVars = {user: false, admin: false}
    res.render('login', templateVars)
  }

  if (req.session.id === 'admin'){
    const templateVars = {user: true, admin: true}
    res.render('login', templateVars)
  }

  const templateVars = {user: true, admin: false}
  res.render('login', templateVars);
});

module.exports = router;
