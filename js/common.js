	var pageHei = $(window).height();
	$('.fullPage').height(pageHei);

	function closeRecent(){
		$('.recent').css('display','none');
		$('#search b').css('opacity','0');
		$('.cover').css('display','none');
	}
	
	$('#search input').focus(function(){
			$('.recent').css('display','block');
			$('#search b').css('opacity','1');
			$('.cover').css('display','block');
		});
		
	$('.recent li').click(function(){
			$('#search input').val($(this).text());
		});	
		
	$('#search b').click(function(){
			closeRecent();
			$('#search input').val('');
		})