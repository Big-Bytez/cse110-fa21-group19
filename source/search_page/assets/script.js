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

async function searchFetchRecipes(searchBar) {
  let searchString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&${searchBar}&addRecipeInformation=True`;
  console.log(searchString);  
  return fetch(searchString)
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
  for(let i=0; i< resultArray.length; i++){
    let ele = document.createElement('search-recipe');
    ele.data = resultArray[i];
    document.querySelector("main").append(ele);

  }
}
  