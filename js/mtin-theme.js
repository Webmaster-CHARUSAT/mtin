// Custom behaviour for MTIN site
$(document).ready(function () {

    // ===== Smooth scroll for nav =====
    $('a.mtin-nav-link').on('click', function (e) {
        var target = $(this).attr('href');
        if (target && target.charAt(0) === '#' && $(target).length) {
            e.preventDefault();

            // close collapsed menu on mobile
            $('.navbar-collapse.in').collapse('hide');

            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 600);
        }
    });

    // ===== Highlight active menu on scroll =====
    var sections = $('section[id], header[id]');
    var navLinks = $('.mtin-nav-link');

    function updateActiveNav() {
        var scrollPos = $(window).scrollTop() + 90;
        sections.each(function () {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr('id');
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.parent().removeClass('active');
                navLinks.filter('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }

    $(window).on('scroll', updateActiveNav);
    updateActiveNav();

    // ===== Owl carousel: recruiters =====
    if ($('#mtin-recruiters').length) {
        $('#mtin-recruiters').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 2 },
                480: { items: 3 },
                768: { items: 4 },
                992: { items: 5 }
            }
        });
    }

    // ===== Owl carousel: testimony =====
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

    // ===== Reveal-on-scroll animation =====
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
});
