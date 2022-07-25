$('#password').focusin(function () {
    $('.login-box').addClass('up')
}).focusout(function () {
    $('.login-box').removeClass('up')
})
$(document).on('mousemove', function (e) {
    let dw = $(document).width() / 10
    let dh = $(document).height() / 18
    let x = e.pageX / dw
    let y = e.pageY / dh
    $('.eye-ball').css({
        left: x,
        top: y
    })
})