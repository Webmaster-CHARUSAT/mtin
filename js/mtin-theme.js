$(document).ready(function () {

    /* ========= Smooth Scroll for Menu ========= */
    $('a.mtin-nav-link').on('click', function (e) {
        var target = $(this).attr('href');
        if (target && target.charAt(0) === '#' && $(target).length) {
            e.preventDefault();
            // close menu in mobile
            $('.navbar-collapse.in').collapse('hide');

            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 600);
        }
    });

    /* ========= Highlight Active Menu on Scroll ========= */
    var sections = $('section[id], header[id]');
    var navLinks = $('.mtin-nav-link');

    function updateActiveNav() {
        var scrollPos = $(window).scrollTop() + 90;
        sections.each(function () {
            var t = $(this).offset().top;
            var b = t + $(this).outerHeight();
            var id = $(this).attr('id');
            if (scrollPos >= t && scrollPos <= b) {
                navLinks.parent().removeClass('active');
                navLinks.filter('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    $(window).on('scroll', updateActiveNav);
    updateActiveNav();

    /* ========= Owl Carousel: Recruiters ========= */
    if ($('#mtin-recruiters').length) {
        $('#mtin-recruiters').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:   { items: 2 },
                480: { items: 3 },
                768: { items: 4 },
                992: { items: 5 }
            }
        });
    }

    /* ========= Owl Carousel: Testimony ========= */
    if ($('#mtin-testimony').length) {
        $('#mtin-testimony').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items: 1,
            smartSpeed: 700
        });
    }

    /* ========= Reveal-on-scroll animation ========= */
    function handleReveal() {
        $('.reveal').each(function () {
            var rect = this.getBoundingClientRect();
            var winH = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= winH - 60) {
                $(this).addClass('in-view');
            }
        });
    }
    $(window).on('scroll load', handleReveal);
    handleReveal();

    /* ========= Revolution Slider Init ========= */
    if ($("#rev_slider_1").revolution !== undefined) {
        $("#rev_slider_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "js/assets/revolution/",
            sliderLayout: "fullscreen",
            delay: 7000,
            navigation: {
                arrows: { enable: true, style: "uranus" },
                bullets: { enable: false }
            },
            responsiveLevels: [1200, 992, 768, 480],
            gridwidth: [1200, 992, 768, 480],
            gridheight: [650, 550, 480, 420],
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 400
            }
        });
    }

});
