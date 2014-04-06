var jt = require('jt-cli'),
	path = require('path'),
	fs = require('fs');

jt.cwd = __dirname;
jt.config = require('./.jt/config.js');
jt.config.base = path.resolve(__dirname);
jt.init();

jt.fs.assign('jt-include', require('../index.js'));
describe('include', function() {
	it('支持include参数传递', function(done) {
		jt.fs.readFile('files/newindex1.html', function(data) {
			var body = fs.readFileSync('./test/files/index1.html');
			var css = fs.readFileSync('./test/files/css.css');

			body = body.toString().replace("<%= include('css') %>", css);
			if(data.toString() == body) {
				done();
			} else {
				doen(false);
			}
		});
	});

	it('支持相对文件路径引用', function(done) {
		jt.fs.readFile('files/newindex2.html', function(data) {
			var body = fs.readFileSync('./test/files/index2.html');
			var js = fs.readFileSync('./test/files/js.js');

			body = body.toString().replace("<%= include('./js.js') %>", js);
			if(body == data.toString()) {
				done();
			} else {
				done(false);
			}
		});
	});

	it('混合两种模式', function(done) {
		jt.fs.readFile('files/newindex.html', function(data) {
			var body = fs.readFileSync('./test/files/index.html');
			var js = fs.readFileSync('./test/files/js.js');
			var css = fs.readFileSync('./test/files/css.css');

			body = body.toString().replace("<%= include('css') %>", css);
			body = body.toString().replace("<%= include('./js.js') %>", js);

			if(body == data.toString()) {
				done();
			} else {
				done(false);
			}
		});
	});

	it('空参数', function(done) {
		jt.fs.readFile('files/newindex3.html', function(data) {
			var body = fs.readFileSync('./test/files/index3.html');

			body = body.toString().replace("<%= include('') %>", '');
			
			if(body == data.toString()) {
				done();
			} else {
				done(false);
			}
		});
	});
});