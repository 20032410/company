$(window).resize(function(){
	var height = $(window).height();
	var width = $(document).width();
	$('#sy,.navbg,#cgal,#cpjy,#ywfw,#lxwm,#jstd,#imgdiv,#list,#list>img').height(height);
	$('.sy-con1,.sy-con2,.sy-con3').width(width);
	$('.buhao').width(width*3);
})
$(document).ready(function(){
	console.log('%c警告！！此模式禁止操作！！！','color:red;font-size: 20px;');
	var height = $(window).height();
	var width = $(document.body).width();
	$('#sy,.navbg,#cgal,#cpjy,#ywfw,#lxwm,#jstd,#imgdiv,#list,#list>img').height(height);
	$('.sy-con1,.sy-con2,.sy-con3').width(width);
	$('.buhao').width(width*3);
	$('.weixin').mouseover(function(){
		$(".erweima1").animate({right:'100px',opacity:'1'},200)
	})
	$('.weixin').mouseout(function(){
		$(".erweima1").animate({right:'500px',opacity:'0'},200)
	})
	$('span').click(function(){
		if ($(this).index()==0) {
			$('span').removeClass('on');
			$(this).addClass('on');
			$('.buhao').animate({left:'0'},200);
		}
		if ($(this).index()==1) {
			$('span').removeClass('on');
			$(this).addClass('on');
			$('.buhao').animate({left:'-100%'},200);
		}
		if ($(this).index()==2) {
			$('span').removeClass('on');
			$(this).addClass('on');
			$('.buhao').animate({left:'-200%'},200);
		}
	})
	$(function(){
		 //setInterval (showTime, 6000);
		 function showTime(){
			var left = parseInt($('.buhao').css('left'));
			var left1 = parseInt($('.nihao').width());
			if (left == 0) {
				$('.buhao').animate({left:'-100%'},1000);
				$('span').removeClass('on');
				$('.imgs-button>span:eq(1)').addClass('on');
			}if (left == -left1) {
				$('.buhao').animate({left:'-200%'},1000);
				$('span').removeClass('on');
				$('.imgs-button>span:eq(2)').addClass('on');
			}if (left == -(left1*2)) {
				$('.buhao').animate({left:'0'},500);
				$('span').removeClass('on');
				$('.imgs-button>span:eq(0)').addClass('on');
			}
		}
		
	})
	$('.team').animate({marginTop:'10%',opacity:'1'},2500,'easeOutElastic')
	$('.al-div1').animate({marginLeft:'0',opacity:'1'},2000,'easeOutElastic')
	$(document).ready(function(){
		
		$(".al-tiao").click(function(){
			console.log('nihao');
		  $("html, body").animate({
		    scrollTop: $($(this).attr("href")).offset().top + "px"
		      }, {
		          duration: 1000,
		          easing: "swing"
		  });
			return false;  
		}); 
	});
	$('li').mouseenter(function(){
		if (!$(this).children('.card').is(':animated')){
		$(this).children('.card').animate({top:'-130px'
											},200);
		}
	});
	$('li').mouseout(function(){
		$(this).children('.card').animate({top:'0px',
											left:'10px',
											width:'180px',
											height:'220px'
											},150);
	});
	$('li').click(function(){
		if ($(this).index()==0) {
			var card = $(this).children('.card');
			card.animate({top:'-300px',
							left:'280px'
							},500);
			card.animate({width:'500px'
							},300);
		}
		if ($(this).index()==1) {
			var card = $(this).children('.card');
			var carddiv = $(this).children('.card').children('.card-text');
			card.animate({top:'-300px',
							left:'-10px'
							},500);
			card.animate({width:'650px'},300);
			carddiv.animate({width:'490px'},100);
		}
		if ($(this).index()==2) {
			var card = $(this).children('.card');
			card.animate({top:'-300px',
							left:'-150px'
							},500);
			card.animate({width:'500px'
							},300);
		}
		if ($(this).index()==3) {
			var card = $(this).children('.card');
			card.animate({top:'-300px',
							left:'-380px'
							},500);
			card.animate({width:'500px'
							},300);
		}
		if ($(this).index()==4) {
			var card = $(this).children('.card');
			card.animate({top:'-300px',
							left:'-600px'
							},500);
			card.animate({width:'500px'
							},300);
		}
	});
	$(window).scroll(function(){
		var hei1 = $('#cgal').height();
		var hei = $(window).scrollTop();
		if (hei >= hei1/2) {
			$('.al-1').animate({left:'0'},1000);
		}
		if (hei >= hei1) {
			$('.al-2').animate({right:'0'},1000);
		}
		if (hei >= hei1+900) {
			$('.al-3').animate({left:'0'},1000);
		}
		if (hei >= hei1+1800) {
			$('.al-4').animate({right:'0'},1000);
		}
		if (hei >= hei1+2700) {
			$('.al-5').animate({left:'0'},1000);
		}
		if (hei >= hei1+3600) {
			$('.al-6').animate({right:'0'},1000);
		}
	})
	$(".cp-top-img>img").mousemove(function(){
		var x=event.offsetX;
		var tx = (parseInt(x))/200-2;
		$('.cp-top-img>img').css('transform','rotateY('+tx+'deg)');
	});
	$(".cp-top-img>img").mouseout(function(){
		$('.cp-top-img>img').css('transform','rotateY(0deg)');
	});
})