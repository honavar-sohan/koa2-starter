
class DataAccessLayer {
	constructor(collectionName) {
		console.log('creating dal');
		if (mongo) {
			this.collection = mongo.collection(collectionName);
		} else {
			connectMongo().then((db) => {
				console.log('Mongo up & running');
				global.mongo = db;
				this.collection = mongo.collection(collectionName);
			}).catch((e) => {
				console.log(`Mongo seems to be not responding ${e.toString()}`);
				console.log('Shutting down the App :(');
				process.exit();
			});
		}
		this.insert = this.insert.bind(this);
		this.find = this.find.bind(this);
		this.findOne = this.findOne.bind(this);
		this.count = this.count.bind(this);
		this.distinct = this.distinct.bind(this);
		this.findOneAndUpdate = this.count.bind(this);
		this.findOneAndDelete = this.findOneAndDelete.bind(this);
		this.update = this.update.bind(this);
		this.remove = this.remove.bind(this);
	}

	async insert(query, options) {
		return this.collection.insert(query, options);
	}

	async find(query, options) {
		return this.collection.find(query, options).toArray();
	}

	async findOne(query, options) {
		return this.collection.findOne(query, options);
	}

	async count(query, options) {
		return this.collection.count(query, options);
	}

	async distinct(key, query, options) {
		return this.collection.distinct(key, query, options);
	}

	async findOneAndUpdate(query, options) {
		return this.collection.findOneAndUpdate(query, options);
	}

	async findOneAndDelete(query, options) {
		return this.collection.findOneAndDelete(query, options);
	}

	async update(query, options) {
		return this.collections.update(query, options);
	}

	async remove(query, options) {
		return this.collection.remove(query, options);
	}
}

module.exports = DataAccessLayer;
