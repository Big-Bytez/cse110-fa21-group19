// Script for adding recipe card

const recipeData = {};

window.addEventListener('DOMContentLoaded', init);

/**
 * Get users favorite recipes from local storage.
 */
function collectStorage(){

    for(let i = 0; i < localStorage.length; i++){
        recipeData[i] = localStorage.key(i);
    }
}

/**
 * CREDITS to Lab 6 Starter Code.
 * 
 * Recursively search for a key nested somewhere inside an object
 * @param {Object} object the object with which you'd like to search
 * @param {String} key the key that you are looking for in the object
 * @returns {*} the value of the found key
 */
 function searchForKey(object, key) {
    var value;
    Object.keys(object).some(function (k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === "object") {
            value = searchForKey(object[k], key);
            return value !== undefined;
        }
    });
    return value;
}

/**
 * Create RecipeCards based on user's farvorite recipes
 */
function createRecipeCards(){
    let recipes = document.querySelector("recipes");
    recipes.innerHTML = "";
    for(let i = 0; i < localStorage.length+1; i++){
        let card = document.createElement('fav-recipe');
        
        if(i >= localStorage.length){
            card.data = "Favorite more recipes!";
        }
        else{
            card.data = recipeData[i];
        }
        document.querySelector("recipes").appendChild(card);
    }
}
function renewRecipeByTime(){
    let sidebar = document.querySelector("#timeSelection");
    sidebar.addEventListener("change",function(e){
        let time = e.target.getAttribute("value");;

        console.log(time);
        // destroy all current recipes and add those meeting time limit
        let recipes = document.querySelector("recipes");
        recipes.innerHTML = "";
        for(let i = 0; i < localStorage.length+1; i++){
            let card = document.createElement('fav-recipe');
            
            if(i >= localStorage.length){
                card.data = "Favorite more recipes!";
            }
            else{
                let RecipeJson = JSON.parse(localStorage.getItem(recipeData[i]));
                let recipeTime = searchForKey(RecipeJson, "totalTime");
                if(parseInt(recipeTime) <= parseInt(time)){
                    card.data = recipeData[i];
                }
                else{
                    continue;
                }
                    
            }
            document.querySelector("recipes").appendChild(card);
        }
});
}
function searchFavoriteRecipe() {
    let searchFavoriteRecipeButton = document.querySelector("#fav-submit");
    searchFavoriteRecipeButton.addEventListener("click",function(e){
        e.preventDefault();
        //clear out current recipes
        let recipes = document.querySelector("recipes");
        recipes.innerHTML = "";
        // split input string into array
        let keyWord = document.querySelector("#fav-keyword").value;
        keyWord = keyWord.split(" ");
        // iterate each key, check if they match recipes' title in localStorage
        
        for(let i = 0; i < localStorage.length; i++){
            let matchAllKey = true;
            keyWord.forEach(key =>{
                if(recipeData[i].toLowerCase().indexOf(key.toLowerCase()) == -1){
                    matchAllKey = false;
                }
            });
            console.log(matchAllKey);
            if(matchAllKey){
                let card = document.createElement('fav-recipe');
                card.data = recipeData[i];
                document.querySelector("recipes").appendChild(card);
            }
        }
    });
    
    let restoreFavoriteRecipeButton = document.querySelector("#restoreAllrecipes");
    restoreFavoriteRecipeButton.addEventListener("click",function(e){
        e.preventDefault();

        createRecipeCards();
    });
}

async function init() {

    collectStorage();

    createRecipeCards();

    renewRecipeByTime();
    
    searchFavoriteRecipe();



}
