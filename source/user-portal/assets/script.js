// Script for adding recipe card

// This would be the array from Local Storage
const recipes = [


];

const recipeData = {};

window.addEventListener('DOMContentLoaded', init);

async function init() {

    let fetched = await fetchRecipes();

    if(!fetched){
        console.error('Failed fetch');
        return;
    }

    createRecipeCards();
}

async function fetchRecipes() {
    return new Promise((resolve, reject) => {

        for(let i = 0; i < recipes.length; i++){
            fetch(recipes[i])
            .then((response) => response.json())
            .then((data) => {
                recipeData[i] = data;
                if(i + 1 == recipes.length){
                    resolve(true);
                }
            })
            .catch((error) => {
                console.error('Error fetching: ', error);
                reject(false);
            })
        }
        resolve(true);
    });
}

function createRecipeCards(){

    for(let i = 0; i < 6; i++){

        let card = document.createElement('fav-recipe');
        
        card.data = "Favorite more recipes!";

        document.querySelector("recipes").appendChild(card);
    }
}