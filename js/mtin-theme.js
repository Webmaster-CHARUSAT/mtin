// MTIN Theme JS

$(document).ready(function () {

    // ===== Mobile Nav Toggle =====
    $('#mtin-mobile-toggle').on('click', function () {
        $('#mtin-mobile-nav').toggleClass('open');
    });

    // Close mobile nav on link click
    $('#mtin-mobile-nav .nav-link').on('click', function () {
        $('#mtin-mobile-nav').removeClass('open');
    });

    // ===== Smooth Scroll for nav links =====
    $('a.nav-link').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 600);
        }
    });

    // ===== Recruiters Carousel =====
    $('#recruiters-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:   { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 5 }
        }
    });

    // ===== Testimony Carousel =====
    $('#testimony-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        smartSpeed: 700
    });

    // ===== Active nav link on scroll (simple version) =====
    var sections = $('section[id]');
    var navLinks = $('.nav-link');

    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop() + 120;

        sections.each(function () {
            var curr = $(this);
            if (curr.position().top <= scrollPos && curr.position().top + curr.height() > scrollPos) {
                var id = curr.attr('id');
                navLinks.removeClass('active');
                $('.nav-link[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
