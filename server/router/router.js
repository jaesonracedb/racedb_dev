const eventController = require(__dirname + '/../controllers/event');
const userController = require(__dirname + '/../controllers/user_controller')
module.exports= (app) =>{
  //User routes
  app.get('/token-info',userController.authenticateToken, userController.sampleAuthenticate);
  app.post('/refresh-user',userController.refreshToken);
  app.post('/create-user', userController.createUser);
  app.post('/userLogin', userController.userLogin);
  app.delete('/logout',userController.logout);
  //Event
  app.get('/get-featured', eventController.getFeatured);
  app.get('/get-race/:id',eventController.getRace);
  app.get('/search-results/:filter/:key/:order/:page',eventController.getPageItems);
  app.post('/get-rating',eventController.getRating);
  app.post('/get-user-rating',eventController.getUserRating);
  app.post('/add-like',eventController.addLike);
  app.post('/create-event',eventController.addEvent);
}
