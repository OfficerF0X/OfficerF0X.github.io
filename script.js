$(document).ready(function (){
    // MENU / NAVBAR SCRIPT
    $(".menu-btn").click(function(){
       $(".navbar .menu").toggleClass("active");
       $(".menu-btn i").toggleClass("active")
    });
    var typed = new Typed(".animatedText2", {
        strings: ["DW transporte ", "DW transporte ", "DW transporte ", "DW transporte ", "DW transporte "],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});