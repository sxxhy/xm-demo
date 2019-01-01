$(function () {
    var $next = $('.app-recommend .recommend-header .more .next');
    var $prev = $('.app-recommend .recommend-header .more .prev');
    var $ul = $('.app-recommend .recommend-content .list');
    var marginLeft = parseInt($ul.css('margin-left'));
    var width = parseInt($ul.css('width'));
    var num = 5;
    $next.click(function(){
        $prev.removeClass('disabled');
        if (marginLeft > -5 * (234 + 14)) num = 5;
        if (num !== 5) {
            $(this).addClass('disabled');
            return;
        }
        marginLeft+= -num*(234+14);
        if (Math.abs(marginLeft) > width-5*(234+14)) {
            num = $ul.children().length%5;
            marginLeft = marginLeft + (5-num)*(234+14);
        }
        $ul.css('margin-left',marginLeft);
        if (num!==5 || Math.abs(marginLeft) - (width - 5 * (234 + 14))===0) $(this).addClass('disabled');
    });
    $prev.click(function () {
        $('.next').removeClass('disabled');
        if (marginLeft === 0) {
            $(this).addClass('disabled')
            return;
        }
        if (marginLeft <= -5*(234+14)) {
            num = 5;
        }else {
            num = $ul.children().length%5;
            $(this).addClass('disabled')
        }
        marginLeft+=num*(234+14);
        $ul.css('margin-left',marginLeft);
        if (num !== 5 || marginLeft===0) $(this).addClass('disabled');
    })
});