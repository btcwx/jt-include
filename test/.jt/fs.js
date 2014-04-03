var fileSystem = {
	'include.js': [{
		'processor': 'jt-include',
		'file': 'files/index.html',
		'jt-include': {
			include: {
				'css': './files/css.css',
				'js': './files/js.js'
			}
		}
	}]
};

module.exports = fileSystem;