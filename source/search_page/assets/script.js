window.addEventListener('DOMContentLoaded', init);
async function init() {
  }
/*
function createRecipeCards() {

  
    for(let i = 0; i<25;i++){

    let ele = document.createElement('search-recipe');
    if(i%2){
      ele.data = "Delish Pasta";
    }else{
      ele.data = "Delish delish Pasta with bacon and even more pasta";
    }
    
    
    document.querySelector('main').append(ele)
      
    }
    
  
}
*/

<<<<<<< HEAD
/**
 * Get info from spoonacular and fetch search page with thumbnails
 * @param {string} searchBar - key word for searching entered by user 
 */
=======
/*
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&instructionsRequired=true&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "b99bc80573mshf2530a05219b844p140ef0jsn891357db5296"
	}
}

*/

>>>>>>> af868f6bed8d7faa1a0a0b75dd3b7b3cc89b6bab
async function searchFetchRecipes(searchBar) {
  let searchString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${searchBar}&addRecipeInformation=True` 
  return fetch(searchString 
  ,{ "method": "GET",
    "headers": {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "b99bc80573mshf2530a05219b844p140ef0jsn891357db5296"
    }
  })
    .then((response) => response.json());
}

window.onload = async function(){
  let questionLocation = window.location.href.indexOf("?");
  if (questionLocation < 0 ){
    return;
  }
  let querystring = window.location.href.substring(questionLocation + 1);
  let resultArray = await searchFetchRecipes(querystring).then((response) => {
    return response.results;
  });
  console.log(resultArray);
  for(let i=0; i< resultArray.length; i++){
    let ele = document.createElement('search-recipe');
    ele.data = resultArray[i];
    document.querySelector("main").append(ele);
    

  }
}
  