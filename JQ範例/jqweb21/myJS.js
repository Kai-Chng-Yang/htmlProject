$(function () {
    $("#MWNU li").hover(function () {
        $(this).stop(true, false).animate({ top: 0 }, 300);
        $(this).prev().stop(true, false).animate({ top: 60 }, 300);
        $(this).next().stop(true, false).animate({ top: 60 }, 300);
    }), function () {
        $("#MWNU li").stop(true, false).animate({ top: 100 }, 300);
    }
})