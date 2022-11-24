const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();

//log's out user
router.post('/' , (req,res) => {

  //delete cookie session
  req.session = null;

  res.redirect('/');
})

module.exports = router;
