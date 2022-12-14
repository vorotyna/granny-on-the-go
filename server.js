// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();


const cookieSession = require('cookie-session')

app.set('view engine', 'ejs');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const myOrderRoutes = require('./routes/my-order')
const restaurantRoutes = require('./routes/start-order')
const loginPostRoutes = require('./routes/login-post')
const logoutRoutes = require('./routes/logout')
const myOrderCustomerApiRoutes = require('./routes/sms-api-customer')
const myOrderRestaurantApiRoutes = require('./routes/sms-api-restaurant')
const restaurantAPIRoutes = require('./routes/restaurant-api')
const cartAPIRoutes = require('./routes/cart-api')
const adminRoutes = require('./routes/admin')
const adminPostRoutes = require('./routes/admin-post')


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes )
app.use('/login', loginPostRoutes)
app.use('/logout', logoutRoutes)
app.use('/my-order', myOrderRoutes)
app.use('/restaurant', restaurantRoutes)
app.use('/my-order/customer', myOrderCustomerApiRoutes)
app.use('/my-order/restaurant', myOrderRestaurantApiRoutes)
app.use('/restaurant', restaurantAPIRoutes)
app.use('/api/carts', cartAPIRoutes)
app.use('/admin', adminRoutes)
app.use('/admin', adminPostRoutes)





// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).



app.get('/', (req, res) => {

  if (!req.session.id){
    const templateVars = {user: false, admin: false}
    res.render('index', templateVars)
  }

  if (req.session.id === 'admin'){
    const templateVars = {user: true, admin: true}
    res.render('login', templateVars)
  }

  const templateVars = {user: true, admin: false}
  res.render('index', templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
