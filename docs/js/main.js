$(document).ready(function(){

	var nav = $("#navigation");
    
    $('.mobile-menu').click(function(){
            $('.mobile-menu').toggleClass('is-opened');
            $(nav).slideToggle();

            //Добавляем модификатор класс mobile-menu--active
            $('.mobile-menu').toggleClass('mobile-menu--active');
    });
    


    // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 992)  {
		    nav.removeAttr('style');
		}
	});


	// Инициализация карусели 
	$("#owl-carousel").owlCarousel({
		
		// Параметры карусели
	    singleItem : true,
	 
	    // Navigation
	    navigation : true,
	    navigationText : ["",""],
	    
	    // CSS Styles
	    theme : "header-slider-theme",
	});
 	


});