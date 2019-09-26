$(function() {
    $('[data-tab]').on('click', function (e) {
        e.preventDefault();
        $('.tab-active').removeClass('tab-active');
        let id = this.getAttribute('data-tab');
        $(this).toggleClass('tab-active');
        $(id).toggleClass('tab-active')
    });

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        let id = this.getAttribute('data-modal');
        if($(id).length === 0) return false;
        else {
            $('body').css('overflow', 'hidden');
            $(id).fadeIn()
        }
        $(id.concat(' .modal-window__close-button')).on('click', function (e) {
            $(id).fadeOut();
            $('body').css('overflow', 'auto')
        })
    });

    $("[data-scroll]").click(function(e) {
        e.preventDefault();
        let position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        });
        let nav = '.navbar';
        $(nav).removeAttr('style');
        $('a.hamburger-icon').removeClass('active');
    });

    $('a.hamburger-icon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        let nav = '.navbar';
        if( $(nav).css('display').toLowerCase() === 'none') $(nav).css('display', 'flex');
        else $(nav).removeAttr('style');
    })
    $("input[type='submit']").on('click', function (e) {
        let form = $(this).parent('.form');
        form.validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: false
                }
            },
            messages: {
                name: {
                    required: "Введите Ваше имя"
                },
                phone: {
                    required: "Введите Ваш номер телефона"
                }
            },
            submitHandler: function () {
                swal({
                    title: "Спасибо за заявку",
                    text: "Мы перезвоним Вам в течении 5 минут.",
                    icon: "success",
                    button: "Хорошо",
                });
            }
        })
    });
});