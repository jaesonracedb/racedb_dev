const eventController = require(__dirname + '/../controllers/event');
const userController = require(__dirname + '/../controllers/user_controller')
module.exports= (app) =>{
  //Diego routes
  app.get('/get-featured', eventController.getFeatured);
  app.post('/create-user', userController.createUser);
  app.post('/userLogin', userController.userLogin);
  //Event
  app.post('/add-event',eventController.addEvent);
  app.get('/get-race/:id',eventController.getRace);
  app.get('/search-results/:filter/:key/:order/:page',eventController.getPageItems);
}
