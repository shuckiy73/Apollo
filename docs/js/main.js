$(document).ready(function(){

	var nav = $("#navigation"); //Якорь списка с навигацией
    var mNav= $('#mobile-menu'); //Якорь строчки мобильного меню со значком

    $(mNav).click(function(e){
   	    e.preventDefault();
	    nav.slideToggle();
	    $(this).toggleClass('is-opened mobile-menu--active');
    });
    
    // При изменении размера окна, в большую сторону, если меню было скрыто, показываем его.
    // И удаляем классы is-opened mobile-menu--active
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 992)  {
		    nav.removeAttr('style');
		    mNav.removeClass('is-opened mobile-menu--active');
		}
	});

	// Плавный переход к нужному блоку
	$("#navigation").on("click","a", function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault();
		
		// Заккрываем мобильное пеню, если открыто
		if ( $(mNav).hasClass("is-opened")  ) {
   			mNav.removeClass('is-opened mobile-menu--active');
   			nav.slideToggle();
		}

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	// Инициализация карусели 
	$("#owl-carousel").owlCarousel({
		
		// Параметры карусели
	    singleItem : true,
	    slideSpeed : 800,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	    // Navigation
	    navigation : true,
	    navigationText : ["",""],
	    // CSS Styles
	    theme : "header-slider-theme",
	});

});