
const Users = require('../models/index')('user');
const Variant = require('../models/index')('variant');

module.exports.hello = async (ctx) => {
  ctx.body = 'Hello World!';
};

module.exports.inserthello = async (ctx) => {
  await Variant.insert(ctx.request.body);
  ctx.body = await Users.insert(ctx.request.body);
};
