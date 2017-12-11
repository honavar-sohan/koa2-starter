const testController = require('../controllers/test2.controller');

module.exports = (app, Router) => {
	const router = new Router();

	router.post('/insert2', testController.inserthello);
	app.use(router.routes()).use(router.allowedMethods());
};
