$(document).ready(function () {




    // animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }


    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end

// valdation start


    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true,
                        rangelength: [2, 20]
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true,
                    },
                    message: {
                        required: true,
                    }
                },
                messages: {
                    name: {
                        required: 'Name is required'
                    },
                    email: {
                        required: 'Email is required'
                    },
                    subject: {
                        required: 'Please write the name of your subject'

                    },
                    message: {
                        required: 'Please write your message'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });

    }







    $('.toggle-submenu').click(function () {
        $(this).toggleClass('fa-bars fa-times');
    });




    if ($('.professionals-carousel').length > 0) {
        $('.professionals-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000

        });
    }

    $('.navbar-nav').on('click', '.toggle-submenu-drop', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-chevron-down fa-chevron-up');
        $(this).parent().next('.submenu').slideToggle();
    });


});

