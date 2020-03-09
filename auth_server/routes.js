const usr_cntrllr = require('./controllers/user_controller')
const event_cntrllr = require ('./controllers/event_controller');
const formidable = require('express-formidable');
module.exports = (app) => {
  app.get('/', (req, res) =>{
    res.send('Welcome to the Backend API')
  });
  app.post('/', (req,res) => {
    res.send("pls resolve");
  })

  app.post('/userLogin', usr_cntrllr.userLogin);
  app.post('/eventUploadPicture',formidable(), event_cntrllr.eventUploadPicture)
}
