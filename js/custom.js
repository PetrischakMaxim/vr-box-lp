//WOW JS

new WOW().init();

$(document).ready(function() {

	//popup
	//open
	$('.popup-btn').on('click', function() {
    	event.preventDefault();
    	$('.popup').fadeIn(); 
  	});

	//close
  	$('.popup-close').on('click', function() {
  		event.preventDefault();
  		$('.popup').fadeOut();
  	});


    //video-popup

    MediaBox('.mediabox');

    //relax

    var rellax = new Rellax('.rellax');

    //mask-input
    jQuery(function($){
      $(".form-phone").mask("+38 (999) 999-9999");
    });

    //hide- placeholder
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

    //toTOP
    $(function() {
 
      $(window).scroll(function() {
       
      if($(this).scrollTop() != 0) {
       
      $('#toTop').fadeIn();
       
      } else {
       
      $('#toTop').fadeOut();
       
      }
       
      });
       
      $('#toTop').click(function() {
       
        $('body,html').animate({scrollTop:0},800);
       
        });
 
    });



});