$(function () {
    
    $(".main").hover(function () {
        $(this).stop(true, false).animate({ top: -280 }, 500,"easeOutExpo")
    }, function () {
        $(this).stop(true, false).animate({ top: 0 }, 500, "easeOutExpo")
    })















})