$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(`.navbar`).addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky");

        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $(`.menu-btn`).click(function () {
        $(`.navbar .menu`).toggleClass("active");
        $(`.menu-btn i`).toggleClass("active");

    });
    

    //typing animation
    var typed = new Typed(".typing-1", {
        strings: ["வணக்கம்🙏","स्वागत हे🙏","Welcome🙏","स्वागत आहे🙏","സ്വാഗതം🙏","స్వాగతం🙏"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing", {
        strings: ["a Web Developer", "an IOT Intern", "a Freelancer", "a Mentor", "an UI designer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["a Web Developer", "an IOT Intern", "a Freelancer", "a Mentor", "an UI designer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

    });
});
