$(function(){
	/*header*/
	$(".appdw").eq(0).hover(
	  function () {
	    $('.appdw>a>span').eq(0).removeClass("dp-n");
	    $('.appdw>div').eq(0).removeClass("dp-n");
	  },
	  function () {
	    $('.appdw>a>span').eq(0).addClass("dp-n");
	    $('.appdw>div').eq(0).addClass("dp-n");
	  }
	);
	$(".shoppingcar").eq(0).hover(
		function(){
			$('.sc_con').eq(0).css("display",'block');
		},
		function(){
			$('.sc_con').eq(0).css("display",'none');
		}
	);
	/*search*/
	$('#search').focus(function(){
		$(this).css("color",'#000' ).val('');
		$('.searchbtn').css("background","#267dd7").children().css("background-position","-134px -45px");
		$('.search_history').css("display","block");
	})
	$('#search').blur(function(){
		$(this).css("color",'#c8c8c8' );
		$('.searchbtn').css("background","#fff").children().css("background-position","-115px -45px");
		$('.search_history').css("display","none");
	})
	$('.searchbtn').hover(
		function(){
			$(this).css("background","#267dd7").children().css("background-position","-134px -45px");;
		},
		function(){
			$(this).css("background","#fff").children().css("background-position","-115px -45px");
		}
	)
	$('.ms_list li').click(function(){
//		alert($(this).index());
		$('.ms_type>p').html($(this).html()+"<i></i>");
		switch($(this).index()){
			case 0:
				$('#search').val("搜索电影、影院、影人、商品、新闻");break;
			case 1:
				$('#search').val("请输入电影关键词");break;
			case 2:
				$('#search').val("请输入影人关键词");break;
			case 3:
				$('#search').val("请输入影院关键词");break;
			case 4:
				$('#search').val("按名称、电影、品牌搜索商品");break;
			case 5:
				$('#search').val("请输入新闻关键词");break;
		}
		
	})
	
	/*tricksearch*/
	$('.ts_tit dd').mouseover(function(){
		$('.ts_tit dd').removeClass("ts_show");
		$(this).addClass("ts_show");
		if($(this).index()){
			$('.ts_trick').hide();
			$('.ts_playing').show();
		}else{
			$('.ts_playing').hide();
			$('.ts_trick').show();
		}
	})
	
	
	/*售票轮播*/
	var dlwidth=$('.dlroll>dd').length*$('.dlroll>dd').innerWidth()+$('.dlroll>dt').width();	
	$('.dlroll').css("width",dlwidth);
	$('.next').click(function(){
		$(this).hide();
		$('.last').show();
		 $(".dlroll").eq(0).animate({
		 	marginLeft:-($(".dlroll").width()-$(".dl_wrap").width())
		  }, 1000 );
	})
	$('.last').click(function(){
		$(this).hide();
		$('.next').show();
		 $(".dlroll").eq(0).animate({
		 	marginLeft: 0
		  }, 1000 );
	})
	/*上映轮播*/
	var ulwidth=$('.ulroll>li').length*$('.ulroll>li').innerWidth();	
	var allpage=Math.ceil($('.ulroll>li').length/3);
	var page=0;
	$('.ts_next').click(function(){
		page++;
		if(page==allpage-1){
			$(this).hide();
		}
		$('.ts_prev').show();
		 $(".ulroll").eq(0).animate({
		 	marginLeft:-$('.ulroll>li').innerWidth()*3*page
		  }, 1000 );
	})
	$('.ts_prev').click(function(){
		$('.ts_next').show();
		page--;
		if(page==0){
			$(this).hide();
		}
		 $(".ulroll").eq(0).animate({
		 	marginLeft:-$('.ulroll>li').innerWidth()*3*page
		  }, 1000 );
	})
	
	
	/*mall淡入淡出*/
	$('.ms_1').eq(0).css("opacity","1");
	var mallpage=0;
	$('.mall_next').click(function(){		
		$('.ms_1').eq(mallpage).animate({
			opacity:"0"
		},1000).css("z-index","1");
		mallpage++;
		if(mallpage>$('.ms_1').length-1){
			mallpage=0;
		}
		$('.ms_1').eq(mallpage).animate({
			opacity:"1"
		},1000).css("z-index","2");			
	})
	$('.mall_prev').click(function(){		
		$('.ms_1').eq(mallpage).animate({
			opacity:"0"
		},1000).css("z-index","1");
		mallpage--;
		if(mallpage<0){
			mallpage=$('.ms_1').length-1;
		}
		$('.ms_1').eq(mallpage).animate({
			opacity:"1"
		},1000).css("z-index","2");			
	})
	
	/*缓动浮现*/
	$(window).scroll( function() {
		console.log($(window).scrollTop());
		if($(window).scrollTop()>270){
			for(var i=0;i<$(".huandongdiv").length;i++){
				$(".huandongdiv").eq(i).animate({
					top:"0",
					opacity:1
				},1000+i*500)
			}
			$(".huandongdiv1").animate({
				left:"0",
				opacity:1
			},1000)
			
			
		}
		if($(window).scrollTop()>1580){
			$(".huandongdiv2").animate({
				top:"0",
				opacity:1
			},500,function(){
				$(".huandongdiv3").animate({
					left:"0",
					opacity:1
				},1000)
				$(".huandongdiv4").animate({
					left:"0",
					opacity:1
				},1000)
			})
		}
		if($(window).scrollTop()>1700){
			$(".mall_footer ul").animate({
					top:"0",
					opacity:1
				},2000)
		}
	})
})