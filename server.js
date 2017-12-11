const dotenv = require('dotenv');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Validate = require('./app/utils/Validator');

const envi = process.env.NODE_ENV || 'dev';

if (envi === 'production') {
	dotenv.load();
} else {
	console.log('App is starting...');
	console.log(`Loading config values from  ./${envi}.env`);
	dotenv.load({
		path: `./${envi}.env`,
	});
}

const App = new Koa();
App.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
	ctx.set('X-Response-Time', `${ms}ms`);
});
App.use(bodyParser());

App.use(Validate({
	schema: './app/middlewares/validators',
}));
require('./bootstrap')();
require('./app/routes')(App);

App.listen(env('PORT') || 8080);
console.log(`Node up & running ${env('PORT')} `);
