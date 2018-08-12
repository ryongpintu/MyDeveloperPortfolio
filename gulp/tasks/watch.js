var gulp = require('gulp'),
watch = require('gulp-watch'),
browseSync = require('browser-sync').create();

gulp.task('watch',function(){
	browseSync.init({
     notify:false,
     server:{
        
     	baseDir:"app"
     }
	});
    
    watch('./app/index.html',function(){

		browseSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){

		gulp.start('cssInject');
	});
});

gulp.task('cssInject',['styles'],function(){

    gulp.src('./app/temp/styles/styles.css')
    .pipe(browseSync.stream());

});