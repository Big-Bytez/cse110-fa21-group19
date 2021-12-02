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

/*
function removeRecipe(k){//remove Recipe by index number
    console.log('removeStart');
    var element = document.querySelector("recipes");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    // all recipes should be deleted and want to create again
    console.log('removed all element from recipes');
    for(let i = 0; i < 6; i++){
        let card = document.createElement('fav-recipe');
        console.log(1);
        if(i >= localStorage.length){
            card.data = "Favorite more recipes!";
        }
        else{
            if(k!=i)
            card.data = recipeData[i];
        }
        document.querySelector("recipes").appendChild(card);
        console.log(1);
    }
    
    console.log('removeEnd');
    createRecipeCards();
}
*/

async function init() {

    collectStorage();

    createRecipeCards();
}