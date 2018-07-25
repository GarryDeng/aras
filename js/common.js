var focusTime = true;
// 搜索一下
$('.header-fixed-list .search-input').on('click',function(){
    focusTime = false;
    var searchValue = $(this).find('input').val();
    if ($(this).hasClass('search-focus') || searchValue=="") {
        $(this).removeClass('search-focus').find('input').focus();
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
            $('.header-fixed-list .search-input').addClass('search-focus');
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