
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
  let vals = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1a75396eadf347a5ad84f4c37723d29f&maxReadyTime=${request}&addRecipeInformation=True`).then((response) => response.json());
  for (let i = 0; i<5; i++ ){
      let link = document.createElement("a");
      link.href = "../recipe-individual/index.html?" + data;
      let slideDiv = document.createElement("div");
      /*slideDiv.setAttribute('class','slide');*/
      let element = document.createElement("article");
      element.id = "tile";
      let recipe = vals.results[i];
      let title = document.createElement("h1");
      title.id = "title";
      title.textContent = recipe.title;
      element.appendChild(title);
      let image = document.createElement("img");
      image.id = "image";
      image.src = recipe.image;
      element.appendChild(image);
      let circle = document.createElement("div");
      circle.id = "circle";
      circle.textContent = "<" + recipe.readyInMinutes + "min";
      element.appendChild(circle);
      let ElemIngredient  = document.createElement("div");
      ElemIngredient.id = "ingredients";
      console.log(document.getElementsByClassName("container")[0]);
      let place = 0; 
      if (request == '30'){
        place = 1;
      }
      if (request == '60'){
        place = 2;
      }
      slideDiv.append(element);
      link.appendChild(slideDiv);
      document.getElementsByClassName("container")[place].appendChild(link);
    }
  }


makeThumbnails(20);
makeThumbnails(30);
makeThumbnails(60);



 
 /*$('body').append("<i id='icon_right'></i>");
 $('body').append("<i id='icon_left'></i>"); 
 add_icon('#icon_right', 'fa fa-chevron-right', '40px', 'white');
 add_icon('#icon_left', 'fa fa-chevron-left', '40px', 'white');*/
 
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
 
