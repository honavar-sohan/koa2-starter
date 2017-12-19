const fs = require('fs');
const path = require('path');

global.env = (name, defaultVal) => {
	if (process.env[name]) {
		return process.env[name];
	}
	if (defaultVal) {
		return defaultVal;
	}
	return null;
};

global.config = (() => {
	const files = fs.readdirSync(`${__dirname}/../config`);
	let configFiles = [];

	if (files.length) {
		configFiles = files.map((file) => {
			if (path.extname(file) === '.js') {
				return path.basename(file, '.js');
			}
			return null;
		});

		if (configFiles.length) {
			const config = {};

			configFiles.forEach((file) => {
				/* eslint-disable global-require, import/no-dynamic-require */
				// TODO: Dynamic require is anti-pattern, replace this with synchronous file read
				if (file) {
					config[file] = require(`${__dirname}/../config/${file}`);
				}
			});
			return config;
		}
		throw new Error('No Config Files Found');
	} else {
		throw new Error('No Config Files Found');
	}
})();
