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

$(function() {
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



});