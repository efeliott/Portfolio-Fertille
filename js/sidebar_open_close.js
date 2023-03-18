$('.open-btn').on('click' , function(){
    $('.sidebar').addClass('active');
});

$('.close-btn').on('click' , function(){
    $('.sidebar').removeClass('active');
});

$('.nav-link').on('click' , function(){
    $('.sidebar').removeClass('active');
});