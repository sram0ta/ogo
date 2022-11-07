if ($(".container__popup__close").click((function(e) {
    e.preventDefault(),
    $(".popup__mortgage-application").removeClass("popup__active"),
    $("body").removeClass("body__overflow"),
    $(".wrapper__popup__thank").removeClass("wrapper__popup__thank__active")
})));
$(".btn_c").click((function(e) {
    e.preventDefault(),
    $(".popup__mortgage-application").addClass("popup__active"),
    $("body").addClass("body__overflow")
}
));