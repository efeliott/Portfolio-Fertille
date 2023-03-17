const school = $('.timeline-container-school');
const work = $('.timeline-container-work');
const btn_school = $('.btn-school');
const btn_work = $('.btn-work');

$('.btn-school').on('click' , function(){
    if($('.timeline-container-school').hasClass("active")) {
    }
    else{
        school.addClass('active');
        work.removeClass('active');
        btn_school.addClass('active');
        btn_work.removeClass('active');
    }
});

$('.btn-work').on('click' , function(){
    if($('.timeline-container-work').hasClass("active")) { 
    }
    else{
        work.addClass('active');
        school.removeClass('active');
        btn_school.removeClass('active');
        btn_work.addClass('active');
    }
});