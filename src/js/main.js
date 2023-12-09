
function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}

$('.banner-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
    dots : true,
});
