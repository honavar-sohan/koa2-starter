const { MongoClient } = require('mongodb');
const Redis = require('ioredis');

global.mongo = false;
global.connectMongo = async () => {
	const conn = await MongoClient.connect(config.db.mongo.uri, config.db.mongo.options);
	return conn;
};

global.redis = new Redis(
	config.db.redis.port,
	config.db.redis.host,
);
global.redis.connect(() => {
	console.log('Redis up & running');
});
