$(function () {
    let $li = $('.product-container .container-header .more .list .item');
    $li.mouseenter(function () {
        let index = $(this).index();
        $(this).css({color: '#ff6700','border-bottom': '2px solid #ff6700'}).siblings().css({color: '#333','border-bottom': 'transparent'});
        var $ul = $($(this).parent().parent().parent().next().children('.product-list').children()[index]);
        $ul.show().siblings().hide();
    })
});