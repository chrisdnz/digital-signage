var t;

var start = $('#myCarousel').find('.active').attr('data-interval');
t = setTimeout("$('#myCarousel').carousel({interval: 1000});", start-1000);

$('#myCarousel').on('slid.bs.carousel', function () {
     clearTimeout(t);
     var duration = $(this).find('.active').attr('data-interval');

     $('#myCarousel').carousel('pause');
     t = setTimeout("$('#myCarousel').carousel();", duration-1000);
})
