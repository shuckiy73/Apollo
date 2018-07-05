//Подключение пакетов
var gulp = require ('gulp');
var browserSync=require('browser-sync').create();
var less = require('gulp-less'); //Компиляция Less to Css
var plumber = require('gulp-plumber'); //Обработчик ошибок
var notify = require('gulp-notify'); //Уведомления
var autoprefixer = require ('gulp-autoprefixer'); //Кроссбраузеные префиксы
var sourcemaps = require('gulp-sourcemaps'); //Плагин для отображения в инспекторе местоположения элемента в исходном файле препроцессора

//Запуск BrowserSync и отслеживание изменений в файлах
gulp.task('server',function(){
  	browserSync.init({
  		server: {baseDir: './docs/'}
  	});	
  	gulp.watch('docs/**/*.html').on('change', browserSync.reload); //Отслеживаем и обновляем
  	gulp.watch('docs/css/**/*.css').on('change', browserSync.reload); //Отслеживаем и обновляем
    gulp.watch('docs/js/**/*.js').on('change', browserSync.reload); //Отслеживаем и обновляем
  	gulp.watch('docs/less/**/*.less',['less']); //Отслеживаем, компилируем и обновляем
});

//Для убоства делаем Server задачей по умолчанию
gulp.task('default',['server']);

//LESS - CSS
//Общая схема:
//main.Less===plumber()====sourcemaps.init====Less-css====autoprefixer()===sourcemaps.write====css/main.css====browserSync.stream
gulp.task('less', function() {
    return gulp.src('./docs/less/main.less')
      //Обработка ошибок + уведомления
      .pipe(plumber({
      	errorHandler: notify.onError(function(err){
      		return {
      			title:'Styles - LESS',
      			message: err.message
      		}
      	})
      })      )
      //
      .pipe(sourcemaps.init()) //Запускаем
      .pipe(less())
      .pipe(autoprefixer({
      	browsers: ['last 3 versions'],
      	cascade: false
      }))
      .pipe(sourcemaps.write()) //Прописываем
      .pipe(gulp.dest('docs/css')) //Создаем или обновляем файл
      .pipe(browserSync.stream()); //Stream не обновляет всю страницу, а точечно обновляет css, который был изменен
});