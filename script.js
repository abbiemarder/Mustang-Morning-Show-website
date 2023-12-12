$('.popup-youtube, .popup-text').magnificPopup({
                    disableOn: 320,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
});

$("button").click(function () {
  $("button").toggleClass("active");
  $(".title").toggleClass("active");
  $("nav").toggleClass("active");
});