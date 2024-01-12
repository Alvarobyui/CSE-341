const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req, res) => {
  res.send('Hello World, This is home router');
});
router.get('/user', (req, res) => {
  res.send('Alvaro Diaz');
});
router.get('/login', (req,res) => {
  res.send('Hello World, This is login router');
});
router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router)');
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});