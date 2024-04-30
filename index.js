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
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.home .content');
srtop.reveal('.home .socials');
srtop.reveal('.home .image');


srtop.reveal('.about .heading');
srtop.reveal('.about .row');


srtop.reveal(".skills .heading")
srtop.reveal(".skills .container")


srtop.reveal(".education .heading")
srtop.reveal(".education .box-container")


srtop.reveal(".projects .heading")
srtop.reveal(".projects .box",{ delay: 200 })


