$('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});
$(".fa-solid").click(function(){
    $("body").toggleClass("dark-theme")
    $(".about").toggleClass("dark-theme")
    $(".skills").toggleClass("dark-theme")
    $(".education").toggleClass("dark-theme")
})