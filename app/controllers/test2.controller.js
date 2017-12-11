const Users = require('../models/index')('user');

module.exports.inserthello = async (ctx) => {
  ctx.body = Users.insert(ctx.request.body);
};
