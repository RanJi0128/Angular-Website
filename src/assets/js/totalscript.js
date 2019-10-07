/* 
 * Create HTML5 elements for IE's sake
 * Reference: http://ejohn.org/blog/html5-shiv/
 * Reference: http://remysharp.com/2009/01/07/html5-enabling-script/
 */

document.createElement("article");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("nav");
document.createElement("aside");
document.createElement("section");


$(document).ready(function() {
     $('#navbtn').click(function() {
          $('ul.mainmenu').animate({ height: 'toggle'}, 300);
		 });	  
	 
	 });
	 
	 
$(document).ready(function() {	 
	$('.expose').click(function(e){
    $(this).css('z-index','99');
    $('#overlay').fadeIn(300);
});

$('#overlay').click(function(e){
    $('#overlay').fadeOut(200, function(){
        $('.expose').css('z-index','1');
    });
});
 
	 });	 

	 
$(document).ready(function() { 

  $('ul.mainmenu').find('ul').parent().append('<span class="menuarrow"></span>');
  $(".menuarrow").click(function () {
		$(this).prev("ul").animate({ height: 'toggle'}, 300);
		//$(this).removeAttr("href");
		//return false;
		if ($(this).parent().hasClass('active')) {
      		$(this).parent().removeClass('active');
   		 } else {
      		$(this).parent().addClass('active');
    	} 
    });

});


$(document).ready(function() { 
$(".btn").click(function () {
    $(this).next(".dropdown").show();
	$(this).removeAttr("href");
});
$(document).click(function (e) {
    if (!$(e.target).hasClass("btn") 
        && $(e.target).parents(".dropdown").length === 0) 
    {
        $(".dropdown").hide();
    }
});
});



