$(function(){
    var isClick = true;
    var slideIndex = 0;
    $($('.spot-item')[slideIndex]).addClass('active');
    $($('.banner-img')[slideIndex]).fadeIn().siblings().fadeOut();
    function task() {
        slideIndex++;
        if (slideIndex > $('.banner-img').length-1) {
            slideIndex = 0;
        }
        $($('.banner-img')[slideIndex]).fadeIn().siblings().fadeOut();
        $($('.spot-item')[slideIndex]).addClass('active').siblings().removeClass('active');
    }
    var bannerTask=setInterval(task,5000);
    $('.app-banner').hover(function () {
        clearInterval(bannerTask);
    },function () {
        bannerTask = setInterval(task, 5000);
    });
    $('.slide-left').on('click',function () {
        if (isClick){
            isClick = false;
            slideIndex--;
            if (slideIndex<0)
                slideIndex = $('.banner-img').length-1;
            $($('.banner-img')[slideIndex]).fadeIn().siblings().fadeOut();
            $($('.spot-item')[slideIndex]).addClass('active').siblings().removeClass('active')
            setTimeout(function(){
                isClick = true;
            },500);
        }
    });
    $('.slide-right').on('click',function () {
        if (isClick){
            isClick =false;
            slideIndex++;
            if (slideIndex>$('.banner-img').length-1)
                slideIndex = 0;
            $($('.banner-img')[slideIndex]).fadeIn().siblings().fadeOut();
            $($('.spot-item')[slideIndex]).addClass('active').siblings().removeClass('active')
            setTimeout(function () {
                isClick = true;
            },500);
        }
    });
    $('.spot-item').on('click',function(){
        slideIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $($('.banner-img')[slideIndex]).fadeIn().siblings().fadeOut();
    })
});