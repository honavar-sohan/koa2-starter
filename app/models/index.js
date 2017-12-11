
const DataAccessLayer = require('../utils/DataAccessLayer');

const collections = [];
module.exports = (data) => {
	if (collections[data]) {
		return collections[data];
	}
	collections[data] = new DataAccessLayer(data);
	return collections[data];
};
