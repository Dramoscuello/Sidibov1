$(document).ready(function(){   
    
    
    //scroll top
    $('.goTop').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.goTop').slideDown(300);
        }else{
            $('.goTop').slideUp(300);
        }
    });
    //scroll top
    //contenido fijo
    //var altura = $('.contenido').offset().top; 
    //alert("altura");   
    //$(window).on('scroll', function(){
     //   if($(window).scrollTop() > altura){

            //$('.navegacion').addClass('fixed');
      //  }else{
            //$('.navegacion').removeClass('fixed');
        //}
    //});
    //contenido fijo
});