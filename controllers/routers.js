const home = (req, res) => {
  res.send('Welcome to the home router');
}
const user = (req, res) => {
  res.send('Zory Warton');
}
const login = (req,res) => {
  res.send('Welcome to the login router');
}

module.exports = {
  home,
  user,
  login,
}