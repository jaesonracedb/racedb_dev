const eventController = require(__dirname + '/../controllers/event');
const userController = require(__dirname + '/../controllers/user_controller')
module.exports= (app) =>{
  //User routes
  app.get('/get-featured', eventController.getFeatured);
  app.get('/sampleAuth',userController.authenticateToken, userController.sampleAuthenticate);
  app.post('/token',userController.refreshToken)
  app.post('/create-user', userController.createUser);
  app.post('/userLogin', userController.userLogin);
  app.delete('/logout',userController.logout);
  //Event
  app.post('/add-event',eventController.addEvent);
  app.get('/get-race/:id',eventController.getRace);
  app.get('/search-results/:filter/:key/:order/:page',eventController.getPageItems);
}
