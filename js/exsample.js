$("#navbars .navbarBtn").click(function () {
    const target = $(this).attr("href");
    const position = $(target).offset().top;
    const duration = 800;
    $('html, body').stop().animate({
        scrollTop: position
    }, duration);
})

$("#reviewsSection .header-btn").click(function () {
    const target = $(this).attr("href");
    const position = $(target).offset().top;
    const duration = 800;
    $('html, body').stop().animate({
        scrollTop: position
    }, duration);

})
// 捲動視窗
$(window).scroll(function () {
    navbarRender();
    scrollSlide();
})
// navbar
function navbarRender() {
    const scrollHeight = $(window).scrollTop();
    if (scrollHeight > 81) {
        $("#navbar").css({
            backgroundColor: "rgb(33, 53, 56, 0.2)"
        })
    } else {
        $("#navbar").css({
            backgroundColor: "rgb(33, 53, 56, 1)"
        })
    }
};

// section slide
function scrollSlide() {
    const titleTarget = parseInt($("#sectionOne").offset().top);
    const imgHeight = parseInt($("#sectionOne .programImg").offset().top);
    // console.log(titleTarget);
    // console.log(imgHeight);
    const scrollHeight = $(window).scrollTop();

    if (scrollHeight > titleTarget - 100) {
        $("#sectionOne .programTitle").css({
            marginLeft: "0",
            opacity: "1"
        })
    }
    // sectionOneImg
    setTimeout(function () {
        if (scrollHeight > titleTarget - 50) {
            $("#sectionOne .programImg").css({
                marginLeft: "0",
                opacity: "1"
            })
        }
    }, 500);

    // sectionTwo
    // sectionTwoTarget
    const sectionTwoTarget = parseInt($("#sectionTwo").offset().top);
    // const sectionTwoImgHeight = parseInt($("#sectionTwo .programImg").offset().top);
    if (scrollHeight > sectionTwoTarget - 50) {
        $("#sectionTwo .programLightTitle").css({
            marginLeft: "0",
            opacity: "1"
        })
    }
    // sectionTwoImg
    setTimeout(function () {
        if (scrollHeight > sectionTwoTarget - 50) {
            $("#sectionTwo .programImg").css({
                marginLeft: "0",
                opacity: "1"
            })
        }
    }, 500);


    // sectionThree
    const sectionThreeTarget = parseInt($("#sectionThree").offset().top);
    // const sectionThreeImgHeight = parseInt($("#sectionThree .programImg").offset().top);
    if (scrollHeight > sectionThreeTarget - 50) {
        $("#sectionThree .programTitle").css({
            marginLeft: "0",
            opacity: "1"
        })
    }
    // sectionThreeImg
    setTimeout(function () {
        if (scrollHeight > sectionThreeTarget - 50) {
            $("#sectionThree .programImg").css({
                marginLeft: '0',
                opacity: '1'
            })
        }
    }, 500);


    // sectionFour
    const sectionFourTarget = parseInt($("#sectionFour").offset().top);
    console.log(sectionFourTarget);
    if (scrollHeight > sectionFourTarget - 200) {
        $("#sectionFour .suitePlanImg").css({
            opacity: "1"
        })
    }

    if (scrollHeight > sectionFourTarget - 200) {
        setTimeout(function () {
            $("#suitePlanTextLeft1").addClass("suitePlanTextLeft");
            $("#suitePlanTextRight1").addClass("suitePlanTextRight");
            $("#suitePlanTextLeft2").addClass("suitePlanTextLeft");
            $("#suitePlanTextRight2").addClass("suitePlanTextRight");
        }, 800)
    }
}

