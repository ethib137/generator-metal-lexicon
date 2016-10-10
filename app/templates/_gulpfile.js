'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: '<%= kebabCaseName %>.css',
	bundleFileName: '<%= kebabCaseName %>.js',<% if (buildFormat !== 'globals') { %>
	mainBuildJsTasks: ['build:<%= buildFormat %>:js'],<% } %>
	moduleName: '<%= repoName %>'<% if (templateLanguage !== 'Soy') { %>,
	noSoy: true<% } %><% if (templateLanguage === 'Soy') { %>,
	soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']<% } %><% if (isNodeModule) { %>,
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]<% } %>
});
