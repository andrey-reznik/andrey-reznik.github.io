$(function () {
    confirm_changes();
    $('.buttons-wrapper__count').on('keyup', confirm_changes);

    $('.menu__link').on('click', function (e) {
        $('.menu__link_active').removeClass('menu__link_active')
        $(this).addClass('menu__link_active')
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        autoWidth: true,
        margin: 100,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            }
        }
    });

    $('a.hamburger-icon').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('active')
        $('.menu').slideToggle()
    })

    $('.buttons-wrapper__up').on('click', function (e) {
        e.preventDefault()
        count_field = $(this).siblings('.buttons-wrapper__count')
        count_field.val(count_up(count_field.val()))
        confirm_changes()
    })

    $('.buttons-wrapper__down').on('click', function (e) {
        e.preventDefault()
        count_field = $(this).siblings('.buttons-wrapper__count')
        count_field.val(count_down(count_field.val()))
        confirm_changes()
    })

    function confirm_changes() {
            bedrooms_count = $('#bedrooms .buttons-wrapper__count').val()
            bathrooms_count = $('#bathrooms .buttons-wrapper__count').val()
            calc_price(bedrooms_count, bathrooms_count)
        }

    function calc_price(bedrooms, bathrooms) {
        bedroom_time = 60
        bathroom_time = 30
        total_bedroom_time = bedrooms * bedroom_time
        total_bathroom_time = bathrooms * bathroom_time
        total_time = (total_bedroom_time + total_bathroom_time) / 60
        bedroom_price = 25
        bathroom_price = 15
        total_price = (bedrooms * bedroom_price) + (bathrooms * bathroom_price)
        $('.booking-results__time').text(total_time + ' hours')
        $('.booking-results__subtotal').text('Subtotal ' + total_price + '$')
        $('.booking-results__rooms').text('Includes: ' + bedrooms + ' bedrooms, ' + bathrooms + ' bathrooms')
    }

    function count_up(val) {
        if (val <= 0) {
            return 1
        } else {
            val++
            return val
        }
    }

    function count_down(val) {
        if (val <= 0) {
            return 0
        } else {
            val--
            return val
        }
    }

})