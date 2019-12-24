

 $(document).ready(function(){
        $('.image-enlarge').click(function(){
             $(this).css('width', function(_ , cur){
                  return cur === '500px' ? '100%' : '500px'
            });
        });
    });


$(document).ready(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });
     $('.scrollup').click(function () {
         $("html, body").animate({
             scrollTop: 0
         }, 600);
         return false;
     });
 });
