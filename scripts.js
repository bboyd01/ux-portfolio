function swapIcon(target) {
    console.log("hi");
    var item = $(target).find("i");
    if (item.hasClass("fa-chevron-right")) {
        $(item).removeClass("fa-chevron-right");
        $(item).addClass("fa-chevron-down");
    } else {
        $(item).removeClass("fa-chevron-down");
        $(item).addClass("fa-chevron-right");
    }
}

function toggleResume() {
    $("#resumeContainer").toggleClass("d-none");
    $("#showResume").collapse();
}

function sendEmail() {
    window.location.assign("");
}

$(function() {
    
    var width = $(window).width();
    var sm = 576;
    var md = 768;

    if (!(width >= md)) {
        console.log("s m a l l");
        $("#resumeContainer").removeClass("w-75");
        $("#resumeContainer").addClass("w-100");
    }

    AOS.init({
        once: true,
        disable: "mobile",
    });

    // load lightgallery after the delay to ensure a smooth page load
    var timeInMS = 1000;
    setTimeout(function() {
        // lightgallery library
        lightGallery(document.getElementById("lightgallery1a"), {
            plugins: [lgThumbnail],
            speed: 500,
        });
        lightGallery(document.getElementById("lightgallery1b"), {
            plugins: [lgThumbnail],
            speed: 500,
        });
        lightGallery(document.getElementById("lightgallery2a"), {
            plugins: [lgThumbnail],
            speed: 500,
        });
    }, timeInMS);

    

});