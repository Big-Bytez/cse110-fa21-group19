
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
 

 
 function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

/**
 * Make thumbnails on home page
 * @param {string} request -type of cuisine
 */
async function makeThumbnails(request){
  let vals = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${request}&maxReadyTime=30&addRecipeInformation=True&number=20`
  ,{ "method": "GET",
    "headers": {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "1a75396eadf347a5ad84f4c37723d29f"
    }
  }).then((response) => response.json());
  shuffleArray(vals.results)
  for (let i = 0; i<4; i++ ) {
      let ele = document.createElement("search-recipe");
      ele.data = vals.results[i];
      let place = 0
      if (request == "&cuisine=Greek"){
        place = 1
      }
      if (request == "&cuisine=Indian"){
        place = 2;
      }
      if (request == "&titleMatch=Pasta"){
        place = 3;
      }
      if (request == "&titleMatch=Vegan"){
        place = 1;
      }
      if (request == "&titleMatch=Steak"){
        place = 2;
      }
      document.getElementsByClassName("container")[place].append(ele);
    }
  }

/**
 * fetch home page with Mexican cuisine
 */
makeThumbnails("&cuisine=Mexican");
/**
 * fetch home page with Greek cuisine
 */

//makeThumbnails("&titleMatch=Pasta")
makeThumbnails("&titleMatch=Vegan");
/**
 * fetch home page with Indian cuisine
 */
makeThumbnails("&titleMatch=Steak");



 document.getElementsByClassName("shuffle")[0].addEventListener('click', getRandom());


 async function getRandom(){
  let randomRecipe = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&maxReadyTime=30&addRecipeInformation=True`
  ,{ "method": "GET",
    "headers": {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "b99bc80573mshf2530a05219b844p140ef0jsn891357db5296"
    }
  }).then((response) => response.json());
  console.log(randomRecipe.recipes[0].id)
  document.getElementsByClassName("shuffle")[0].querySelector('a').href = `../recipe-individual/index.html?${randomRecipe.recipes[0].id}`;
 }
 
