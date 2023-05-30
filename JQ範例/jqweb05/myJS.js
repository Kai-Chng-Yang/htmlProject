$(function () {

    $("#AAA").click(function () {
        $("img").fadeIn(500)
    })

    $("#BBB").click(function () {
        $("img").fadeOut(500)
    })

    $("#CCC").click(function () {
        $("img").fadeTo(500,0.5)
    })

    $("#DDD").click(function () {
        $("img").fadeTo(500, 1)
    })
})

