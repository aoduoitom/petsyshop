/*mobile nav*/

$(document).ready(function() {

    $(".btn-submenu").click(function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle();

    });

});

function animatedIcon(x) {
    x.classList.toggle("change");
    $("#menu").slideToggle();
}

