const user = (req, res) => {
  res.send('Zory Warton');
}
const login = (req, res) => {
  const professionalData = [
    "Alvaro",
    "diAZ"
  ]
  res.send(professionalData[0]);
}
const contacts = (req, res) => {
  res.send('Contacts here');
}

module.exports = {
  user,
  login,
  contacts,
}