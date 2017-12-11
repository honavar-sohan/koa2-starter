const fs = require('fs');
const path = require('path');

global.env = (name, defaultVal) => {
	if (typeof process.env[name] !== 'undefined') {
		return process.env[name];
	}
	if (typeof defaultVal !== 'undefined') {
		return defaultVal;
	}
	return null;
};

global.config = (() => {
	const files = fs.readdirSync(`${__dirname}/../config`);

	if (files.length) {
		const configFiles = files.map((file) => {
			if (path.extname(file) === '.js') {
				return path.basename(file, '.js');
			}
		});

		if (configFiles.length) {
			const config = {};

			configFiles.forEach((file) => {
				if (file) { config[file] = require(`${__dirname  }/../config/${  file}`); }
			});
			return config;
		}
		throw new Error('No Config Files Found');
	} else {
		throw new Error('No Config Files Found');
	}
})();
