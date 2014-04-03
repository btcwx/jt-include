var through = require('through2');

module.exports = function(opt, info) {
	return through(function(buffer, encoding, callback) {
		var toRender = buffer.toString();
		var contents;
		var num = 0;

		function render() {
			if(num) return;
			function include(name) {
				return contents[name];
			}

			var result = jt.utils.template(toRender, {
				include: include
			}, {
				evaluate    : /<\[([\s\S]+?)\]>/g,
				interpolate : /<\[=([\s\S]+?)\]>/g,
				escape      : /<\[-([\s\S]+?)\]>/g
			});

			callback(null, result);
		}

		jt.utils.each(opt.include, function(file, key) {
			num++;
console.log(num);
console.log(jt.fs.pathResolve(file, info.dir));
			jt.fs.readFile(jt.fs.pathResolve(file, info.dir), function(data) {
				num--;
				console.log(num);
				contents[key] = data;
				render();
			});
		});

		
	});
};