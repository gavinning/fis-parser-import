const path = require('path')

module.exports = function(content, file, conf) {
	if (!fis.util.is(conf.file, 'Array')) {
		conf.file = [conf.file];
	}

	var importText = '';
	for (var i = 0; i < conf.file.length; i++) {
		if (conf && fis.util.is(conf.file[i], 'String')) {

			// Stylus编译机制的问题，必须设置完整路径
			if(path.extname(conf.file[i]) === '.styl'){
				importText += ('@import "' + path.join(fis.project.getProjectPath(), conf.file[i]) + '";\n');
			}
			else{
				importText += ('@import "' + conf.file[i] + '";\n');
			}

		} else {
			fis.log.error('Param file{String|Array} required. Please check settings.parser["less-import"].');
		}
	};
	
	return importText + content;
};