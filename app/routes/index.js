const Router = require('koa-router');

module.exports = (app) => {
  require('./test')(app, Router);
  require('./test2')(app, Router);
};
