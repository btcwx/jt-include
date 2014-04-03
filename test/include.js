var jt = require('jt-cli'),
	path = require('path');

jt.cwd = __dirname;
jt.config = require('./.jt/config.js');
jt.config.base = path.resolve(__dirname);
jt.init();