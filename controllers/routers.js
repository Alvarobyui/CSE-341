const user = (req, res) => {
  res.send('Zory Warton');
}
const login = (req,res) => {
  res.send('Welcome to the login router');
}
const logout = (req, res) => {
  res.send('Welcome to the logout router');
}

module.exports = {
  user,
  login,
  logout,
}