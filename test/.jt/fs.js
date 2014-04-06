var fileSystem = {
	'files': {
		'newindex.html': [{
			'processor': 'jt-include',
			'file': './index.html',
			'jt-include': {
				'css': './css.css'
			}
		}],
		'newindex1.html': [{
			'processor': 'jt-include',
			'file': './index1.html',
			'jt-include': {
				'css': './css.css'
			}
		}],
		'newindex2.html': [{
			'processor': 'jt-include',
			'file': './index2.html'
		}],
		'newindex3.html': [{
			'processor': 'jt-include',
			'file': './index3.html'
		}]
	}
};

module.exports = fileSystem;