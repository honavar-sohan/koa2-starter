const testController = require('../controllers/test.controller');
const testValidators = require('../middlewares/validators/test.validators');

module.exports = (app, Router) => {
  const router = new Router();

  router.get('/', testController.hello);
  router.post('/insert', testController.inserthello);
  app.use(router.routes()).use(router.allowedMethods());
};
