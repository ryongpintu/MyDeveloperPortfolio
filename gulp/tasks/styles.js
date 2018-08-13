var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
postcss = require('gulp-postcss'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
postcsshex =require('postcss-hexrgba');


gulp.task('styles',function(){

	return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, nested ,cssvars,postcsshex ,autoprefixer]))
	.on('error',function(errorInfo){
        console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});