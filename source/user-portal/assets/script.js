// Script for adding recipe card

const recipes = [
    "https://introweb.tech/assets/json/birthdayCake.json"
];

const recipeData = {};

window.addEventListener('DOMContentLoaded', init);

async function init() {

    
    let fetched = await fetchRecipes();

    if(!fetched){
        console.error('Failed fetch');
        return;
    }

    collectStorage();

    createRecipeCards();
}

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
}

function collectStorage(){

    for(let i = 0; i < localStorage.length; i++){
        recipeData[i] = localStorage.key(i);
    }
}

function createRecipeCards(){

    for(let i = 0; i < 6; i++){
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