const controller = require('./controller');

module.exports = (app) => {
  app.get('/', (req, res) =>{
    res.send('Welcome to the Backend API')
  });
  app.post('/', (req,res) => {
    res.send("pls resolve");
  })
  app.post('/userLogin', controller.userLogin);
}
