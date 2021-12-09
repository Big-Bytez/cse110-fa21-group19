window.addEventListener("DOMContentLoaded", init);
async function init() {
}

/**
 * fetch individual page with given recipe's id 
 * @param {number} id - recipe's unique id 
 * 
 */
async function fetchIndividualRecipe(id) {
  let searchString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information?&includeNutrition=true` 
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
  let result = await fetchIndividualRecipe(querystring).then((response) => {
    console.log(response);
    return response;
  });
  let page =document.createElement("recipe-individual");
  page.data = result;
  document.querySelector("main").append(page);
}

document.getElementsByClassName("shuffle")[0].addEventListener('click', getRandom());


async function getRandom(){
  let randomRecipe = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&maxReadyTime=60&addRecipeInformation=True`
  ,{ "method": "GET",
    "headers": {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "b99bc80573mshf2530a05219b844p140ef0jsn891357db5296"
    }
  }).then((response) => response.json());
  console.log(randomRecipe.recipes[0].id)
  document.getElementsByClassName("shuffle")[0].querySelector('a').href = `../recipe-individual/index.html?${randomRecipe.recipes[0].id}`;
 }
  