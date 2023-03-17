$('.btn-school').on('click' , function(){
    $('.timeline-container-school').addClass('active');
    $('.timeline-container-work').removeClass('active');
});

$('.close-btn').on('click' , function(){
    $('.sidebar').removeClass('active');
});