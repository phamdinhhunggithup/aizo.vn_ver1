$(function () {

    // function start
    init();
    function init ()
    {
        scrollHeader();
        activeCurrentSite();
        modalLocation();
    }

    // active current site
    function activeCurrentSite()
    {
        let siteCurrent = $("#site").attr('data-site');
        let listSiteResponsive = [];
        $("#menu-respon .menu__respon-item").each(function () {
            let siteResponsiveCurrent = $(this).find('a[data-site]').attr('data-site');
            listSiteResponsive.push(siteResponsiveCurrent);
        });
        for(siteItem of listSiteResponsive)
        {
            if(siteItem === siteCurrent) {
                $("#menu-respon").find('a[data-site='+(siteCurrent)+']').addClass('active');
            }
        }
    }

    // modal location
    function modalLocation()
    {
        // show
        $(".info__field-edit").click((e) => {
            $(".change__location-modal").stop().slideToggle();
            e.preventDefault();
        });
        // hide
        $(".my__modal-close").click((e) => {
            $(".change__location-modal").stop().slideUp();
        });
    }

    var scrollHeader = {
        positionScrollCurr : 0,
        positionScrollOll  : 0,
        breakpoint         : 200
    };function scrollHeader()
    {
        let positionScrolling;
        $(window).scroll((e) => {
            positionScrolling = $(window).scrollTop();
            scrollHeader.positionScrollCurr = positionScrolling;
            if ( scrollHeader.positionScrollCurr > scrollHeader.positionScrollOll ) {
                // scroll down
                scrollHeader.positionScrollOll = scrollHeader.positionScrollCurr;
                if( positionScrolling > scrollHeader.breakpoint ) {
                    $("#header[data-scroll='on']").css({
                        "transform" : "translateY(-100%)",
                        "transition" : "all .5s"
                    });
                }
            } else {
                // scroll up
                scrollHeader.positionScrollOll = scrollHeader.positionScrollCurr;
                $("#header[data-scroll='on']").css({
                    "transform" : "translateY(0)",
                    "transition" : "all .4s"
                })
            }
        });
    }
    // ========== SCROLL TOP ========= //
    var buttonScrollTop = {
        button            : "#backTop",
        positionScrolling : 0,
        breakpoint        : 300,
        durationScroll    : 1000,
        durationHide      : 200,
        durationShow      : 200
    };hideShowButtonScroll();scrollTopButton();
    function hideShowButtonScroll()
    {
        $(window).scroll(() => {
            buttonScrollTop.positionScrolling = $(window).scrollTop();
            if(buttonScrollTop.positionScrolling > buttonScrollTop.breakpoint) {
                $(buttonScrollTop.button).stop().fadeIn(buttonScrollTop.durationShow);
            } else {
                $(buttonScrollTop.button).stop().fadeOut(buttonScrollTop.durationHide);
            }
        });
    }
    function scrollTopButton()
    {
        $(buttonScrollTop.button).click(() => {
            scroll(buttonScrollTop.durationScroll);
        });
    }
    // Scroll action
    function scroll(duration)
    {
        $('html,body').animate({
            scrollTop: 0
        }, duration);
    }
});
// ==== CAROUSEL ==== //
$(function () {
	// Banner 
	carousel(".banner--full-bottom-body .carousel__banner",5);
	// hot key word
	carousel(".home-hot__key-word .Slider__wrapper",5);
	// Flash sale
	carousel(".flash__sale-content .carousel__flash-sale",5);
	// hot prod
	carousel(".section-content .list__box-prod-hot",5);
	// blog
	carousel('.blog__hot-carosel .list-carosel-blog',5);
	
	function carousel(carouselName,mainItem)
	{
		let carousel = $(carouselName)
		$(carousel).owlCarousel({
			loop:false,
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:2
				},
				768 : {
					items:3
				},
				1000:{
					items:mainItem - 1
				},
				1200 : {
					items:mainItem
				}
			}
		})
	}
});
