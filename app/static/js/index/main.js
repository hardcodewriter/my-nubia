$(function () {
    $(".list").mouseenter(function () {
        $(this).find($(".jiage")).toggle(false);
        $(this).find($(".goumai")).toggle(true);
    })
})
$(function () {
    $(".list").mouseleave(function () {
        $(this).find($(".jiage")).toggle(true);
        $(this).find($(".goumai")).toggle(false);
    })
})