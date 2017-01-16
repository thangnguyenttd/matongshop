jQuery(document).ready(function($) {
    "use strict"

    $('.parallax-window').parallax();

    // ---------- Preloader ---------- //
    jQuery("#status").delay(1000).fadeOut("slow");
    jQuery("#preloader").delay(1000).fadeOut("slow");
    // ---------- Preloader ---------- //

    // ---------- Scroll Top Back ---------- //
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = jQuery('.scrollup');
    //hide or show the "back to top" link
    jQuery(window).scroll(function() {
        (jQuery(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if (jQuery(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        jQuery('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
    // ---------- Scroll Top Back ---------- //

    // ---------- Banner Slider ---------- //
    jQuery('#tp-banner-2').show().revolution({
        delay: 7000,
        startwidth: 1170,
        startheight: 700,
        navigationType: "false",
        navigationArrows: "solo",
        navigationStyle: "preview1",
        keyboardNavigation: "on",
        shadow: 0,
        fullWidth: "off",
        fullScreen: "on",
        autoHeight: "off",
        forceFullWidth: "on"
    });
    // ---------- Banner Slider ---------- //

    // ------- Slide Meun ------- //
    jQuery('.menu-ico').bigSlide();
    // ------- Slide Meun ------- //

    // ---------- Modal Search bar ---------- //
    jQuery('a[href="#search"]').on('click', function(event) {
        jQuery('#search').addClass('open');
        jQuery('#search > form > input[type="search"]').focus();
    });
    jQuery('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            jQuery(this).removeClass('open');
        }
    });
    // ---------- Modal Search bar ---------- //

    // ---------- Quantity Box ---------- //
    jQuery(".ddd").on("click", function() {
        var $button = jQuery(this);
        var $input = $button.closest('.sp-quantity').find("input.quntity-input");

        $input.val(function(i, value) {
            return +value + (1 * +$button.data('multi'));
        });
    });
    // ---------- Quantity Box ---------- //

    // ---------- Sepcial Offer Slider ---------- //
    jQuery('#sepcial-ofer-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 641,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // ---------- Sepcial Offer Slider ---------- //

    // ---------- Team Slider ---------- //
    jQuery('#team-slider,#related-products-2').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 641,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // ---------- Team Slider ---------- //

    // ---------- Team Slider ---------- //
    jQuery('#testimonail-slider,#blog-gallery-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });
    // ---------- Team Slider ---------- //

    // ---------- Team Slider ---------- //
    jQuery('#blog-slider,#related-products').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 639,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // ---------- Team Slider ---------- //

    // ---------- Team Slider ---------- //
    jQuery('#insta-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
    });
    // ---------- Team Slider ---------- //

    // ---------- recipe detail slider ---------- //
    jQuery('#recipe-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#recipe-gallery-pager'
    });
    jQuery('#recipe-gallery-pager').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#recipe-gallery',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
    // ---------- recipe detail slider ---------- //

    // ------- Date Picker ------- //
    jQuery('#booking-date input').datepicker({
        autoclose: true
    });

    jQuery('#booking-date input').on('show', function(e) {
        console.debug('show', e.date, jQuery(this).data('stickyDate'));

        if (e.date) {
            jQuery(this).data('stickyDate', e.date);
        } else {
            jQuery(this).data('stickyDate', null);
        }
    });

    jQuery('#booking-date input').on('hide', function(e) {
        console.debug('hide', e.date, jQuery(this).data('stickyDate'));
        var stickyDate = jQuery(this).data('stickyDate');

        if (!e.date && stickyDate) {
            console.debug('restore stickyDate', stickyDate);
            jQuery(this).datepicker('setDate', stickyDate);
            jQuery(this).data('stickyDate', null);
        }
    });
    // ------- Date Picker ------- //

    // ------- Clock Picker ------- //
    jQuery('.clockpicker').clockpicker({
        placement: 'top',
        align: 'left',
        donetext: 'Done'
    });
    // ------- Clock Picker ------- //

    // ------- quantity box ------- //
    if (jQuery('.quantity').length > 0) {
        var form_cart = jQuery('.quantity');
        form_cart.prepend('<span class="minus"><i class="fa fa-caret-left"></i></span>');
        form_cart.append('<span class="plus"><i class="fa fa-caret-right"></i></span>');

        var minus = form_cart.find(jQuery('.minus'));
        var plus = form_cart.find(jQuery('.plus'));

        minus.on('click', function() {
            var qty = jQuery(this).parent().find('.qty');
            if (qty.val() <= 1) {
                qty.val(1);
            } else {
                qty.val((parseInt(qty.val(), 10) - 1));
            }
        });
        plus.on('click', function() {
            var qty = jQuery(this).parent().find('.qty');
            qty.val((parseInt(qty.val(), 10) + 1));
        });
    }
    // ------- quantity box ------- //

    // ------- autoheight function ------- //
    var setElementHeight = function() {
        var height = jQuery(window).height();
        jQuery('.fullscreen').css('height', (height));
    }
    jQuery(window).on("resize", function() {
        setElementHeight();
    }).resize();
    // ------- autoheight function ------- //

    // ------- coming soon timer ------- //
    jQuery('#comming-countdown').countdown({
        date: '10/5/2017 13:41:59',
        offset: -100,
        day: 'Day',
        days: 'Days'
    }, function() {
        alert('Done!');
    });
    // ------- coming soon timer ------- //

    // ------- Google Map ------- //
    // jQuery("#map").gmap3({
    //     marker: {
    //         address: "Haltern am See, Weseler Str. 151"
    //     },
    //     map: {
    //         options: {
    //             zoom: 10,
    //             scrollwheel: false,
    //         }
    //     },
    // });
    // ------- Map ------- //

    // ------- Mesonary ------- //
    var $container = jQuery('.gallery-masonary, .menu-masonary');
    var $optionSets = jQuery('.option-set');
    var $optionLinks = $optionSets.find('a');
    function doIsotopeFilter() {
        if (jQuery().isotope) {
            var isotopeFilter = '';
            $optionLinks.each(function() {
                var selector = jQuery(this).attr('data-filter');
                var link = window.location.href;
                var firstIndex = link.indexOf('filter=');
                if (firstIndex > 0) {
                    var id = link.substring(firstIndex + 7, link.length);
                    if ('.' + id == selector) {
                        isotopeFilter = '.' + id;
                    }
                }
            });
            $container.isotope({
                itemSelector: '.masonry-grid',
                filter: isotopeFilter,
                layoutMode: 'fitRows'
            });
            $optionLinks.each(function() {
                var $this = jQuery(this);
                var selector = $this.attr('data-filter');
                if (selector == isotopeFilter) {
                    if (!$this.hasClass('selected')) {
                        var $optionSet = $this.parents('.option-set');
                        $optionSet.find('.selected').removeClass('selected');
                        $this.addClass('selected');
                    }
                }
            });
            $optionLinks.on('click', function() {
                var $this = jQuery(this);
                var selector = $this.attr('data-filter');
                $container.isotope({
                    itemSelector: '.masonry-grid',
                    filter: selector
                });
                if (!$this.hasClass('selected')) {
                    var $optionSet = $this.parents('.option-set');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
                }
                return false;
            });
        }
    }
    var isotopeTimer = window.setTimeout(function() {
        window.clearTimeout(isotopeTimer);
        doIsotopeFilter();
    }, 1000);
    var selected = jQuery('#nh-filterbale-nav > li > a');
    var $this = jQuery(this);
    selected.on('click', function() {
        if (selected.hasClass('selected')) {
            jQuery(this).parent().addClass('current-menu-item').siblings().removeClass('current-menu-item');
        }
    });
    // ------- Mesonary ------- //

    // ------- Counter ------- //
    try {
        jQuery('#tc-counters').appear(function() {
            jQuery('.tc-timer').countTo()
        });
    } catch (err) {}
    // ------- Counter ------- //

    // ------- Animated Progress Bar ------- //
    try {
        jQuery('#tc-skillgroup-1, #tc-skillgroup-2').appear(function() {
            jQuery('.tc-skillholder').each(function() {
                jQuery(this).find('.tc-skillbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {}
    // ------- Animated Progress Bar ------- //

    // ---------- Wow Animation ---------- //
    var wow = new WOW({
        boxClass: 'animate',
        animateClass: 'animated',
        offset: 100,
        mobile: false
    });
    wow.init();
    // ---------- Wow Animation ---------- //

    // ------- Auto height function ------- //
    var setElementHeight = function() {
        var width = jQuery(window).width();
        var height = jQuery(window).height();
        jQuery('.fullscreen').css('height', (height));
    }
    jQuery(window).on("resize", function() {
        setElementHeight();
    }).resize();
    // ------- Auto height function ------- //

    // ------- Prety Photo ------- //
    jQuery("a[data-rel]").each(function() {
        jQuery(this).attr("rel", jQuery(this).data("rel"));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        social_tools: false
    });
    // ------- Prety Photo ------- //

    // ------- PrettyPhoto Video Popup ------- //
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
    // ------- PrettyPhoto Video Popup ------- //

    // ---------- Slide Slider ---------- //
    jQuery('#slide-slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // ---------- Slide Slider ---------- //

    // ---------- Slide Slider ---------- //
    jQuery('#fade-slider').slick({
        dots: false,
        fade: true,
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // ---------- Slide Slider ---------- //

});
