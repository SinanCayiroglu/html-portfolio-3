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

var typed = new Typed(".typing-text",{
    strings:["junior web developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
})
VanillaTilt.init(document.querySelector(".tilt"),{
    max:20
})

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

const srtop = ScrollReveal({
    distance: '100px',
    duration: 1000,
    reset: true
});

srtop.reveal('.home .content');
srtop.reveal('.home .socials');
srtop.reveal('.home .image');


srtop.reveal('.about .heading');
srtop.reveal('.about .row');
srtop.reveal('.about .row .image');
srtop.reveal('.about .row .content');
srtop.reveal('.about .row .content h3');

srtop.reveal(".skills .heading")
srtop.reveal(".skills .container")
srtop.reveal(".skills .row")
srtop.reveal(".skills .bar")

srtop.reveal(".education .heading")
srtop.reveal(".education .box-container")
srtop.reveal(".education .box")
srtop.reveal(".education .image")
srtop.reveal(".education .content")

srtop.reveal(".projects .heading")
srtop.reveal(".projects .box-grid")
srtop.reveal(".projects .box")

