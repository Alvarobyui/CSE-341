const home = (req, res) => {
  res.send('Hello World, This is home router');
}
const user = (req, res) => {
  res.send('Zory Warton');
}
const login = (req,res) => {
  res.send('Hello World, This is login router');
}

module.exports = {
  home,
  user,
  login,
}