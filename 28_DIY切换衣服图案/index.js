$(".option").on("click", function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
    let pattern = $(this).find("img").attr("src");
    if (!pattern) {
        // 没有图案 覆盖层渐隐
        $(".shirt-overlay").fadeOut();
    } else {
        $(".shirt-overlay").css("display", "none");
        $(".shirt-overlay-pattern").css("background-image", "url(" + pattern + ")");
        // 覆盖层渐显
        $(".shirt-overlay").fadeIn();
    }
})