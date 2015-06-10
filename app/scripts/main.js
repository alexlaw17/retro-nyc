$(function() {
    function stickyNav() {
        $(document).bind('scroll', function() {
            var top = $(document).scrollTop();
            var heroHeight = $('.hero').height();
            var linkColor = $('.navbar-default .navbar-nav > li > a');
            if (top > heroHeight) {
                $('.colorNav').slideDown(200);
            } else if (top < heroHeight) {
                $('.colorNav').slideUp(200);
            }
        });
    }
    stickyNav();

    function smoothScroll() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000);
                    return false;
                }
            }
        });
    }

    smoothScroll();

    $('.social-media a').click(function() {
        event.preventDefault();
    });
});
