


jQuery(function($){
	$(window).scroll(function(){
		var bottomOffset = 1000; // отступ от нижней границы сайта, до которого должен доскроллить пользователь, чтобы подгрузились новые посты
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page
		};
		if( $(document).scrollTop() > ($(document).height() - bottomOffset) && !$('body').hasClass('loading')){
			$.ajax({
				url:ajaxurl,
				data:data,
				type:'POST',
				beforeSend: function( xhr){
					$('body').addClass('loading');
				},
				success:function(data){
					if( data ) { 
						$('#true_loadmore_single').before(data);
						$('body').removeClass('loading');
						current_page++;
					}
				}
			});
		}
	});
});
