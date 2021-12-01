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
let reverse = false;
async function searchFetchRecipes(searchBar) {
  if(searchBar.includes('sort=timel')){
    searchBar = searchBar.replace("sort=timel", "sort=time");
    let searchString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&${searchBar}&addRecipeInformation=True&number=100`;
    reverse = true;
    return fetch(searchString)
      .then((response) => response.json());
  }else{
    let searchString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&${searchBar}&addRecipeInformation=True&number=100`;
    return fetch(searchString)
      .then((response) => response.json());
  }
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
  if(reverse){
    for(let i=resultArray.length - 1; i >= 0; i--){
      let ele = document.createElement('search-recipe');
      ele.data = resultArray[i];
      document.querySelector("main").append(ele);
    }  
  }else{
    for(let i=0; i< resultArray.length; i++){
      let ele = document.createElement('search-recipe');
      ele.data = resultArray[i];
      document.querySelector("main").append(ele);
  }
}
}

function sorting(parameter){
  if(!window.location.href.includes("&sort")){
    window.location.href += "&sort=" + parameter;
    return;
  }
  string1 = window.location.href.substring(0, window.location.href.indexOf("sort="));
  string2 = window.location.href.substring(window.location.href.indexOf("sort="));
  if(!string2.includes('&')){
    window.location.href = string1 + "sort=" + parameter;
    return;
  }
  string3 = string2.substring(string2.indexOf("&"));
  window.location.href = string1 + "sort=" + parameter + string3;
}

function filterButton(){
  let queryString = {}
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var checkbox of checkboxes) {
    if(queryString.hasOwnProperty(checkbox.parentNode.id)){
      queryString[checkbox.parentNode.id].push(checkbox.id);
    }else{
      queryString[checkbox.parentNode.id] = [];
      queryString[checkbox.parentNode.id].push(checkbox.id);
    }
  }
  console.log(queryString);
  let stringQuery = "";
  for(filters in queryString){
    if(filters == 'maxReadyTime'){
      let greatest = Math.max.apply(Math, queryString[filters]);
      stringQuery += "&maxReadyTime=" + greatest;
    }else{
      let indiv = "&" + filters + "=";
      for(vals in queryString[filters]){
        indiv += queryString[filters][vals] + ",";
      }
      indiv = indiv.substring(0, indiv.length - 1);
      stringQuery += indiv;
    }
  }
  window.location.href = window.location.href + stringQuery;
}
 
function removeFilterButton(){
  window.location.href = window.location.href.substring(0, window.location.href.indexOf('&'));
}