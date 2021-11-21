window.addEventListener("DOMContentLoaded", init);
async function init() {
}


async function fetchIndividualRecipe(id) {
  let searchString = `https://api.spoonacular.com/recipes/${id}/information?apiKey=e7a6a292af7149028268e50d67ddae49&includeNutrition=true`;
  console.log(searchString);  
  return fetch(searchString)
    .then((response) => response.json());
}

window.onload = async function(){
    console.log("here");
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
  