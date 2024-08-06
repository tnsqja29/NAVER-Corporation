$(function () {
    $('ul.mainmenu > li:nth-child(1) ,  .menu_bg > ul.sub_1').hover(
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_1').show();
        },
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_1').hide();
        }

    )
    $('ul.mainmenu > li:nth-child(2) ,  .menu_bg > ul.sub_2').hover(
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_2').show();
        },
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_2').hide();
        },
        function () {
            $('.menu_bg ul').css('display', 'flex');
        }

    )
    $('ul.mainmenu > li:nth-child(3) ,  .menu_bg > ul.sub_3').hover(
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_3').show();
        },
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_3').hide();
        }

    )
    $('ul.mainmenu > li:nth-child(4) ,  .menu_bg > ul.sub_4').hover(
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_4').show();
        },
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_4').hide();
        }

    )
    $('ul.mainmenu > li:nth-child(5) ,  .menu_bg > ul.sub_5').hover(
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_5').show();
        },
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_5').hide();
        }

    )
    $('ul.mainmenu > li:nth-child(6) ,  .menu_bg > ul.sub_6').hover(
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_6').show();
        },
        function () {
            $('.headinner').find('.menu_bg, .menu_bg > ul.sub_6').hide();
        }

    )


    // $(".mo-nav-link").on('click', function () {
    //     $(this).next("ul.mo-nav-list2").slideToggle(100);
    // });
    // $(".mob-tab").on('click', function () {
    //     $(".mo-nav").addClass('is-active');
    // });
    // $(".btn-close").on('click', function () {
    //     $(".mo-nav").removeClass('is-active');
    // });

    $('.nav-item').mouseenter(
        function() {
            $(this).find('.nav-list2').addClass('is-active'),
            $('.nav-list').addClass('is-show'),
            $('.header').addClass('is-show')

        }
    )

    $('.nav-item').mouseleave(
        function() {
            $(this).find('.nav-list2').removeClass('is-active'),
            $('.nav-list').removeClass('is-show'),
            $('.header').removeClass('is-show')

        }
    )

    $(".mo-nav-link").on('click', function () {
        $(this).next("ul.mo-nav-list2").slideToggle(100);
    });
    $(".btn-mo-nav").on('click', function () {
        $(".mo-nav").addClass('is-active');
    });
    $(".btn-close").on('click', function () {
        $(".mo-nav").removeClass('is-active');
    });

    
    

    
});



