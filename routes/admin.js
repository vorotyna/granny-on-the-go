
const cookieSession = require('cookie-session')
const express = require('express');
const router  = express.Router();
const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// takes user to admin page
router.get('/', (req, res) => {

  //if user is not logged in
  if (!req.session.id){
    const templateVars = {user: false, admin: false}
    res.render('login', templateVars)
  }

  //if user is admin
  if (req.session.id === 'admin'){
    const templateVars = {user: true, admin: true}
    return res.render('admin', templateVars)
  }

  //if user is logged in
  const templateVars = {user: true, admin: false}
  res.render('login', templateVars);
});

module.exports = router;
