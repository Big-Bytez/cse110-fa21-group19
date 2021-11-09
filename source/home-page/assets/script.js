images = {
    "1" : "images/pho.jfif",
    "2" : "images/pho.jfif",
    "3" : "images/pho.jfif",
    "4" : "images/pho.jfif",
    "5" : "images/pho.jfif",
    "6" : "images/pho.jfif",
    "7" : "images/pho.jfif",
    "8" : "images/pho.jfif",
    "9" : "images/pho.jfif",
    "10" : "img/10.png"
 }
 
 Object.keys(images).forEach(function(path) {
     $('#hold_images').append("<img class='my_img' width=200 height=400 src=" + images[path] + ">"); 
 });
 
 $('body').append("<i id='icon_right'></i>");
 $('body').append("<i id='icon_left'></i>"); 
 add_icon('#icon_right', 'fa fa-chevron-right', '40px', 'white');
 add_icon('#icon_left', 'fa fa-chevron-left', '40px', 'white');
 
 $(document).ready(function(){
     $('.my_img').hover(function() {
         $(this).addClass('transition');
     
     }, function() {
         $(this).removeClass('transition');
     });
 });
 
 $(document).on('click', '#icon_right, #icon_left', function() {
     if($(this).attr('id') == 'icon_right') {
         $('body').animate({scrollLeft: 1000}, 800);
         } else {
         $('body').animate({scrollLeft: -1000}, 800);
     }
 });
