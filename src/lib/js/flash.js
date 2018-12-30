$(function () {
    var $next = $('.app-flash .flash-header .more .link.next');
    var $prev = $('.app-flash .flash-header .more .link.prev');
    var $ul = $('.app-flash .flash-content .product-content .list');
    var marginLeft = parseInt($ul.css('margin-left'));
    var width = parseInt($ul.css('width'));
    var num = 4;
    $next.click(function(){
        $prev.removeClass('disabled');
        if (marginLeft > -4 * (234 + 14)) num = 4;
        if (num !== 4) {
            $(this).addClass('disabled');
            return;
        }
        marginLeft+= -num*(234+14);
        if (Math.abs(marginLeft) > width-4*(234+14)) {
            num = $ul.children().length%4;
            marginLeft = marginLeft + (4-num)*(234+14);
        }
        $ul.css('margin-left',marginLeft);
        if (num!==4 || Math.abs(marginLeft) - (width - 4 * (234 + 14))===0) $(this).addClass('disabled');
    });
    $prev.click(function () {
        $('.next').removeClass('disabled');
        if (marginLeft === 0) {
            $(this).addClass('disabled')
            return;
        }
        if (marginLeft <= -4*(234+14)) {
            num = 4;
        }else {
            num = $ul.children().length%4;
            $(this).addClass('disabled')
        }
        marginLeft+=num*(234+14);
        $ul.css('margin-left',marginLeft);
        console.log(num);
        if (num !== 4 || marginLeft===0) $(this).addClass('disabled');
    })
});