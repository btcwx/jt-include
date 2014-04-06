var fileSystem = {
	'files': {
		'newindex.html': [{
			'processor': 'jt-include',
			'file': './index.html',
			'jt-include': {
				include: {
					'css': './css.css'
				}
			}
		}]
	}
};

module.exports = fileSystem;