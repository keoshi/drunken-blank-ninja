( function ( $ ) {

	(function(e){e.fn.unveil=function(t,n){function f(){var t=u.filter(function(){var t=e(this);if(t.is(":hidden"))return;var n=r.scrollTop(),s=n+r.height(),o=t.offset().top,u=o+t.height();return u>=n-i&&o<=s+i});a=t.trigger("unveil");u=u.not(a)}var r=e(window),i=t||0,s=window.devicePixelRatio>1,o=s?"data-src-retina":"data-src",u=this,a;this.one("unveil",function(){var e=this.getAttribute(o);e=e||this.getAttribute("data-src");if(e){this.setAttribute("src",e);if(typeof n==="function")n.call(this)}});r.on("scroll.unveil resize.unveil lookup.unveil",f);f();return this}})(window.jQuery);
	
	var lastScroll = 0,
		settings = {
			menuClass: 'locked',
			urlSite: '',
			gallery: '',
	};

	function init() {
		bindActions();
		headerInit();
		scrollInit();
		unveil();
		goResize();
	};
	
	function bindActions() {
		$('#menu-trigger').on('click', function() {
			triggerNav();
		});
	};
	
	function headerInit() {
		$('.article-header').css('height', $(window).height() );
	};
	
	function triggerNav() {
		if( $('body').hasClass('menu-open') ) {
			$('body').removeClass('menu-open');
			$('#menu').attr('aria-visible', 'false');
		} else {
			$('body').addClass('menu-open');
			$('#menu').attr('aria-visible', 'true');
		}
		event.preventDefault();
	};
	
	function scrollInit() {
		$(window).scroll(function () {
			var offset = $(document).scrollTop();
			
			if ( offset >= 100 ) {
				$('#menu').addClass( settings.menuClass );
			} else {
				$('#menu').removeClass( settings.menuClass );
			}
			
		});
		
		$(window).load(function () {
			var scrollReady = true;
	    });
	};
	
	function unveil() {
		$("img").unveil(200);
	};
	
	function goResize() {
		function onResize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};
		
		onResize(function() {
			headerInit();
		});
		
	};
	
	$( function() {
		init();
	});

}( jQuery ) );