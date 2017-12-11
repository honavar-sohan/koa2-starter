module.exports = {
	mongo: {
		host: 'localhost',
		port: 27017,
		db: 'koa2',
		uri: 'mongodb://localhost:27017/koa2',
		options: {
			poolSize: 10,
		},
	},
	redis: {
		host: 'localhost',
		port: '6379',
	},
};
