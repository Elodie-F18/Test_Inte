//MENU FIXE

window.onscroll = function () {
    fixedHeader()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

//MENU RESPONSIVE
jQuery(function () {
    jQuery("#navtop_bt_resp").click(function () {
        jQuery(".header_nav").slideToggle("slow");
    });
});

//SLIDER AVIS
jQuery(document).ready(function(){
    sudoSlider1 = jQuery("#strap_avis_inslider").sudoSlider({
        auto: false,
        prevNext: true,
        responsive: true,
        numeric: false
    });
});
