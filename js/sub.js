$(function() {
    $('.nav-item').mouseenter(
        function() {
            $(this).find('.nav-list2').addClass('is-active'),
            $('.nav-list').addClass('is-show'),
            $('.header').addClass('is-show'),
            $('.header').removeClass('transparent'),
            $('.nav-list').removeClass('is-hide')

        }
    )

    $('.nav-item').mouseleave(
        function() {
            $(this).find('.nav-list2').removeClass('is-active'),
            $('.nav-list').removeClass('is-show'),
            $('.header').removeClass('is-show'),
            $('.header').addClass('transparent'),
            $('.nav-list').addClass('is-hide')

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

    
})


// $(".head_text li").hover(
//     function() { // mouseenter
//         var index = $(this).index() + 1; // 현재 항목의 인덱스를 가져옴
//         $(".headerPopup" + index).fadeIn(50); // 해당 인덱스에 맞는 팝업을 나타냄
//     },
//     function() { // mouseleave
//         var index = $(this).index() + 1; // 현재 항목의 인덱스를 가져옴
//         $(".headerPopup" + index).fadeOut(50); // 해당 인덱스에 맞는 팝업을 숨김
//     }
// );
