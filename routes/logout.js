
const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();


router.post('/' , (req,res) => {

  req.session = null;

  res.redirect('/');
})

module.exports = router;
