$(document).ready(function(){
         $('.button2 a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 960);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 960);});
});