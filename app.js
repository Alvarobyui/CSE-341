const express = require('express');
const app = express();
const router = express.Router();

const routerController = require("./controllers/routers");

router.get('/', routerController.home);
router.get('/user', routerController.user);
router.get('/login', routerController.login);

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});