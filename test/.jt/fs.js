var fileSystem = {
	'files': {
		'newindex.html': [{
			'processor': 'jt-include',
			'file': './index.html',
			'jt-include': {
				include: {
					'css': './css.css',
					'js': './js.js'
				}
			}
		}]
	}
};

module.exports = fileSystem;