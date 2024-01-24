const express = require('express');
const connectDB = require('./DB/connection');
const app = express();
const router = express.Router();

const routerController = require("./controllers/routers");
const { connect } = require('mongoose');

router.get('/', routerController.user);
router.get('/professional', routerController.login);
router.get('/contacts', routerController.contacts);

app.use('/', router);

connectDB();

app.listen(process.env.PORT || 8080, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
});