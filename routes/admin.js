// Takes user to admin page to
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
    return res.render('admin', templateVars)
  }

  const templateVars = {user: true, admin: false}
  res.render('login', templateVars);
});

module.exports = router;
