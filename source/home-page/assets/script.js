
//Slider Functions

 //Modulo to cycle
 function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }
  function setUpslider(slider) {
    function handleNext() {
      currentSlide = modulo((currentSlide + 1), numSlides);
      changeSlide(currentSlide);
    }
    function handlePrevious() {
      currentSlide = modulo(currentSlide - 1, numSlides);
      changeSlide(currentSlide);
    }
    function changeSlide(slideNumber) {
      slider.style.setProperty('--current-slide', slideNumber);
    }
    
    // get elements
    const buttonPrevious = slider.querySelector('[data-slider-button-previous]');
    const buttonNext = slider.querySelector('[data-slider-button-next]');
    const slidesContainer = slider.querySelector('[data-slider-slides-container]');
   
    // slider state we need to remember
    let currentSlide = 0;
    const numSlides = 15 /*slidesContainer.children.length*/;
  
    // set up events
    buttonPrevious.addEventListener('click', handlePrevious);
    buttonNext.addEventListener('click', handleNext);
  }
  const sliders = document.querySelectorAll('[data-slider]');
  sliders.forEach(setUpslider);
 

let images = {
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
 
 /*
 Object.keys(images).forEach(function(path) {
     $('#hold_images').append("<img class='my_img' width=200 height=400 src=" + images[path] + ">"); 
 });
 */



async function makeThumbnails(request){
  let vals = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bf92ff7d9a9446d1bb7d65f059220f85&cuisine=${request}&maxReadyTime=30&addRecipeInformation=True`).then((response) => response.json());
  for (let i = 0; i<5; i++ ) {
      let recipe = vals.results[i];
      let ele = document.createElement("search-recipe");
      ele.data = vals.results[i];
      let place = 0
      if (request == "Greek"){
        place = 1
      }
      if (request == "Indian"){
        place = 2;
      }
      document.getElementsByClassName("container")[place].append(ele);
    }
  }


makeThumbnails("Mexican");
makeThumbnails("Greek");
makeThumbnails("Indian");



 
 /*$('body').append("<i id='icon_right'></i>");
 $('body').append("<i id='icon_left'></i>"); 
 add_icon('#icon_right', 'fa fa-chevron-right', '40px', 'white');
 add_icon('#icon_left', 'fa fa-chevron-left', '40px', 'white');*/
 
 /*
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
 */
 
