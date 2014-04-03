var jt = require('jt-cli'),
	path = require('path');

jt.cwd = __dirname;
jt.config = require('./.jt/config.js');
jt.config.base = path.resolve(__dirname);
jt.init();

jt.fs.assign('jt-include', require('../index.js'));
describe('seajs', function() {
	it('正常渲染', function() {
		jt.fs.readFile('files/newindex.html', function(data) {
			console.log(data);
		});
	});
});