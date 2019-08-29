$(function () {
    $('.owl-carousel').owlCarousel({
        loop:false,
        nav:false,
        autoWidth:true,
        margin: 40,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:5
            }
        }
    })
})