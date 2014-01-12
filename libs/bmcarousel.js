/*! Copyright (c) 2013 Bruno Marcel
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.2
 *
 * Requires: jQuery 1.8.1+
 */

var 
def = {
		t 				 : '',
		p                : '',
		reload			 : false,
		px        		 : "px",
		container 		 : '',
		wrap      		 : '',
		carousel  		 : '',
		left 	  		 : '',
		right 	  		 : '',
		li        		 : '',
		liQtd     		 : 0,
		liWidth   		 : 0,
		liVisible 		 : 0,
		space     		 : 0,
		qtdScroll		 : 0,
		scroll    		 : 0,
		containerWidth   : 0,
		scrollFinal      : 0
	},
bmcarousel = {
	
	start: function(params){

		if(!params.reload)
			params.container.wrap('<div class="wrapCarousel"><div class="carousel"></div></div>');	

		def.t 				 = this,
		def.p                = params,
		def.reload 		     = def.p.reload || false,
		def.container 		 = def.p.container,
		def.wrap      		 = def.container.parent().parent(),
		def.carousel  		 = def.container.parent(),
		def.left 	  		 = def.p.left || 'left',
		def.right 	  		 = def.p.right || 'right',
		def.li        		 = def.container.find('li'),
		def.liQtd     		 = def.li.length,
		def.liWidth   		 = def.li.width(),
		def.liVisible 		 = def.p.visible || 3,
		def.space     		 = def.p.space || 10,
		def.scroll    		 = (def.liWidth*def.liVisible) + (def.space * def.liVisible),
		def.qtdScroll		 = (def.p.qtdScroll*def.liWidth) + (def.space*def.p.qtdScroll) || def.liWidth+def.space,
		def.containerWidth   = (def.liWidth*def.liQtd) + (def.space * (def.liQtd - 1)),
		def.scrollFinal      = -(def.containerWidth-def.scroll) - def.space;
		
		def.t.init();
	},

	init: function(){
		def.t.liWidth();
	},

	format: function(){

		def.carousel.css({
			'width'     : def.scroll,
			'overflow'  : 'hidden'
		});
		
		def.t.defineData();
		
		if(!def.p.reload){
			def.wrap.append(
			'<a href="#" class="carousel leftCarousel">'+def.left+'</a>'+
			'<a href="#" class="carousel rightCarousel">'+def.right+'</a>'
			);
			def.t.defineVisibleArrows();
			var delay = 70;
			var time = 100;
			$.each(def.carousel.children('ul').find('li'), function(key, val){
				$(val).delay(time += delay).fadeIn();
			});
		}
		

		def.container.css({
			'width' : def.containerWidth
		});
		if(!def.p.reload){
			def.li.first().addClass('first');
			def.li.last().addClass('last');
		}
		def.li.not('.first').css({'margin-left' : def.space+def.px});
		if(!def.p.reload)
			def.t.clickAnimates();
	},

	defineData: function(){
		def.container.attr('data-visible', def.liVisible);
		def.container.attr('data-scroll', def.scrollFinal);
		def.container.attr('data-qtdScroll', def.qtdScroll);
	},

	defineVisibleArrows: function(){
		if(def.liQtd <= def.liVisible){
			def.container.parents('.wrapCarousel').children('a.carousel').addClass('none').hide();
		}else{
			def.container.parents('.wrapCarousel').children('a.leftCarousel').addClass('none').hide();
		}
	},

	clickAnimates: function(){
		def.wrap.find('a.carousel').on('click', function(e){
			e.preventDefault();

			th = $(this);
			ctn = th.parent().find('ul');
			var scll = ctn.attr('data-qtdscroll');
			console.log(scll)
			th.hasClass('leftCarousel') ? def.t.animates(ctn, scll) : def.t.animates(ctn, -scll);
		})
	},

	animates: function(ctn, x){

		var ctnScroll = ctn.data('scroll');
		ctn.stop(true, true).animate(
			{'margin-left' : "+="+x},'slow'
		,function(){

			var ctnWrap = ctn.parent().parent();

			var 
			marginLeft = parseInt(ctn.css('margin-left').replace('px', '')),
			leftCarousel = ctnWrap.find('.leftCarousel'),
			rightCarousel = ctnWrap.find('.rightCarousel');
			
			if(ctnWrap.find('.none').length > 0 ) ctnWrap.find('.none').fadeIn().removeClass('none');
			
			if(marginLeft > 0){
				ctn.stop(true, true).animate({'margin-left' : 0}, 'fast');
				leftCarousel.fadeOut().addClass('none');
			}else if(marginLeft <  ctnScroll ){
				ctn.stop(true, true).animate({'margin-left' : ctnScroll}, 'fast');
				
				rightCarousel.fadeOut().addClass('none');
			}
		});
	},
	
	liWidth: function(){
		var 
		x = def.liQtd,
		y = 0;
		$.each(def.container.children('li'), function(key, val){
			if($(val).children('img')[0].complete){
				y++;
			}	
		});
		y == x ? def.t.format() : def.t.liWidth();
	},

	reload: function(prms){

		def.t.defineData();
		prms.container.parent().css({
			'width'     : (prms.container.find('li').width()*prms.visible) + (def.space * prms.visible)+def.px,
		});
	}
}