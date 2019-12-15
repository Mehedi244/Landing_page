
		$(window).on('scroll', function (){
			if($(this).scrollTop() > 300){
				$('.navbar').addClass('menu-bg');
			}else{
				$('.navbar').removeClass('menu-bg');
			}
		});
	

	
		// for scrollup
		$(window).scroll(function() {
			if ($(this).scrollTop()>100){
				$('.scrollup').fadeIn();
			}else{
				$('.scrollup').fadeOut();
			}
		});

		$('.scrollup').click(function(){
			$("html, body").animate({
				scrollTop:0
			},600);
			return false;
		});
		
	

	$('.counter').counterUp({
    delay: 10,
    time: 1000
	});

	// for map

	 var map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333
    });