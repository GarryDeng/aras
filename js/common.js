var focusTime = true;
// 搜索一下
$('.header-fixed-list .search-input').on('click',function(){
    focusTime = false;
    var searchValue = $(this).find('input').val();
    if ($(this).hasClass('search-focus') || searchValue=="") {
        $(this).removeClass('search-focus').find('input').focus();
        $(this).siblings('.list-skip').fadeOut();
    }else{
        if (searchValue !== "")
        // 跳转链接
        window.location.href = './?' + searchValue;
    }
})
// 搜索框失去焦点
$('.header-fixed-list .search-input input').on('blur',function(){
    focusTime = true;
    var focusTimeSet = setTimeout(function(){
        if (!($('.header-fixed-list .search-input').hasClass('search-focus')) && focusTime)
            $('.header-fixed-list .search-input').addClass('search-focus').siblings('.list-skip').fadeIn();;
    },500)
});
//清空输入内容
$('.search-input.search-focus .close-white').on('click',function () {
    $(this).siblings('input').val('');
});
//检测手机号码是否正确
function phone(tele) {
    var mob = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
    return mob.test(tele);
}
//导航条
$(".header-fixed-list .list-skip .nav-a").hover(function(){
    $(this).find(".second").slideDown(150);
},function(){
    $(this).find(".second").slideUp(0);
});
var animationClass = $('.common-nonactivated-animatiton');
// $('.common-nonactivated-animatiton').each(function (index, item) {
//     animationArr.push($('.common-nonactivated-animatiton').eq(index).offset().top);
// })
animationClass.each(function (index, item) {
    // console.log($(".offer-index .classify-index li .img-svg svg.common-nonactivated-animatiton").eq(index).offset())
    if ($(window).scrollTop() < animationClass.eq(index).offset().top && animationClass.eq(index).offset().top < $(window).scrollTop() + document.documentElement.clientHeight && !animationClass.eq(index).hasClass('common-active-animatiton')) {
        animationClass.eq(index).addClass('common-active-animatiton');
        // console.log(animationClass.eq(index).css('height','auto'));
    }
})
$(window).on('scroll',function(){
    var _that = $(this);
    animationClass.each(function (index, item) {
        if (_that.scrollTop() - animationClass.eq(index).height() < animationClass.eq(index).offset().top && animationClass.eq(index).offset().top < _that.scrollTop() + document.documentElement.clientHeight && !animationClass.eq(index).hasClass('common-active-animatiton')){
            animationClass.eq(index).addClass('common-active-animatiton');
            // console.log(!animationClass.eq(index).hasClass('common-active-animatiton'))
        }
    })
    // animationArr.
});
//手机端二级导航判断问题
$(".a-link").on("click", function (ev) {
    if ($(ev.target).parents().length == 6) {
        return $(this).find('.second').fadeOut();
    }
    $(this).find('.second').fadeToggle();
});