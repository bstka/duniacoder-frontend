$('#Hero3,#Hero4,#Hero2,#Button-kenal,#Carousel2,#ButtonLanjut2,#Sub,#Hero5,#Hero6,#Hero7,#HeroFooter').each(function () {
    $(this).hide()
})
let cuk = $('#Intro').click(function () {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: white;')
    let typed = new Typed('#Sub', {
        strings: ["Hai, Selamat Datang di Web kami!!! 🥰", "Web ini dibuat karena iseng juga karena tidak ada pekerjaan 🤣", 'Ingin Mengenal kami lebih lanjut? 🤔'],
        typeSpeed: 50,
        fadeOut: true,
    });
    $(this).addClass('gradient', 1000)
    $('#Hero').removeClass('is-dark')
    $('#Hero').addClass('is-white', 2000)
    $('#Hero').attr('style', 'background-image: url("https://web.whatsapp.com/img/bg-chat-tile_8a055527b27b887521a9f084497d8879.png");')
    $('#Sub').show()
    $('#Button-kenal').fadeIn(5000)
})

$('#Button-kenal').click(() => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: white;')
    $('#Hero').fadeOut(1000)
    $('#Hero2').fadeIn(3000)
    $(".owl-carousel").owlCarousel({
        items: 3,
        dots: false,
        margin: 10,
    });
})

$('#ButtonLanjut').click(() => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: white;')
    $('#Hero6').show(1000)
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Hero6").offset().top
    }, 2000)
    $('#Hero2').hide(3000)
})

$('#ButtonLanjut12').click( () => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: white;')
    $('#Hero7').show(2000)
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Hero7").offset().top
    }, 2000)
    $('#Hero3').hide(2000)
    // $('#ButtonLanjut2').fadeIn(4000)
})

$('#ButtonLanjut13').click( () => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: white;')
    $('#Hero4').fadeIn(3000)
    $('#Hero7').fadeOut(2000)
    // $('#ButtonLanjut2').fadeIn(4000)
})

$('#ButtonLanjut2').click(() => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: white;')
    $('#Hero3').fadeOut(1000)
    $('#Hero4').fadeIn(2500)
})

$('#ButtonLanjut0').click(() => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: white;')
    $('#Hero6').fadeOut(1000)
    $('#Hero3').fadeIn(2500)
})

$('#ButtonLanjut4').click(() => {
    $('#Hero4').fadeOut(1000)
    $('#Hero5').fadeIn(2500)
    $('#HeroFooter').fadeIn(3000)
})

$('#ButtonLanjut3').click(() => {
    location.reload();
})