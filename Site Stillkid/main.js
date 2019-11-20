function show() {
    $("#bg3").addClass('show')
    var id = $(this).data("id")
    $(".showreel").removeClass("showX showY").addClass("hide")
    $("#" + id).toggleClass('stepup').removeClass('hide')
    if ($("#" + id).hasClass("stepup")) {
        // $("#" + id).addClass("showX").delay(150).queue(function() {
        //     $("#" + id).addClass("showY")
        // })
        $("#" + id).addClass("showX")
        setTimeout(function() {
            $("#" + id).addClass("showY")
        }, 150)
    } else {
        $("#bg3").removeClass('show')
        $("#" + id).removeClass("showX showY stepup")
        setTimeout(function() {
            $("#" + id).addClass("hide")
        }, 150)

    }
    $(".showreel:not(#" + id + ")").removeClass("stepup")
        // $(".showreel".css('transform', 'translateY(0px)'))
    $(this).css('transform', 'translateY(-15px)')


}

// function hide() {
//     $("#bg3").removeClass('show')
//     $(".showreel").addClass('stepup')
//     var id = $(this).data("id")
//     $("#" + id).toggle('.hide')
//     $("#" + id).addClass("showX").delay(150).queue(function() {
//         $("#" + id).addClass("showY")
//     })

// }

$(document).ready(function() {
    $(".animax").on("click", show)
})