    $(window).resize(function(){
	    windowHeight = $(window).height(); // get new height after change
	    $('#index-banner').height(windowHeight);
	});
	$('#index-banner').css('height', $(window).height());

	 $(".scroll").click(function(event) {
	    event.preventDefault();
	    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1001, "swing");
	    } );

(function($){
  $(function(){


    $('.button-collapse').sideNav();
    $('.parallax').parallax();


	



  }); // end of document ready
})(jQuery); // end of jQuery name space