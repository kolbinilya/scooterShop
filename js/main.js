$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }

        ]
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-prev.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 868,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 585,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.pagination__item').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('pagination__item--active');
        $($(this).parent().siblings().find('div')).removeClass('pagination__item--active');

        $(this).addClass('pagination__item--active');
        $($(this).attr('href')).addClass('pagination__item--active');
    });

    $('.filter-style').styler();

    $('.filter__item-drop').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(150);
    })

    $(".js-range-slider").ionRangeSlider();

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-btnline--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-btngrid--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--line');
    })
    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-btngrid--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-btnline--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--line');

    })

    $(function () {

        $("#rateYo").rateYo({
            starWidth: "30px",
            rating: "80%",
            ratedFill: "#1C62CD",
            normalFill: "#C4C4C4",
            numStars: 5
        });

    });

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
        $('.menu__btn-line').toggleClass('menu__btn-line--active')
    })

    $('.footer__top-title').on('click', function () {
        $(this).next().slideToggle();
    })

});