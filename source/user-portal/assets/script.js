// Script for adding recipe card

/*
const recipes = [
    "https://introweb.tech/assets/json/birthdayCake.json"
]; */

const recipeData = {};

window.addEventListener('DOMContentLoaded', init);

/*
// Function here if I need to fetch the recipe... 
// fetch(`https://api.spoonacular.com/recipes/${recipes[i]}/information?apiKey=`+apiKey)
async function fetchRecipes() {
    return new Promise((resolve, reject) => {

        for(let i = 0; i < recipes.length; i++){
            fetch(recipes[i])
            .then((response) => response.json())
                .then((data) => {           
                    localStorage.setItem("Birthday", JSON.stringify(data));
                    recipeData[i] = "Birthday";
                    if(i+1 == recipes.length){
                        resolve(true);
                    }
            })
            .catch((error) => {
                console.error("Error fetching: ", error);
                reject(false);
            })
            resolve(true);
        }
    })
} */
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


async function init() {

    collectStorage();

    createRecipeCards();

    renewRecipeByTime();
    



}
