
async function fetchRecipes() {
    let recipes = []
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&titleMatch=Garlicky Kale')
    .then(response => response.json())
    .then(data => {   
        for(let i = 0; i < data.results.length; i++){
            recipes[i] = data.results[i];
            console.log(data.results[i]);
        }
    })
    return recipes;
}
let recipe = {id: 644387, title: 'Garlicky Kale', image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg', imageType: 'jpg'}

let elementTitle = document.getElementById("title");
elementTitle.textContent = recipe.title;
let elementImage = document.getElementById("img");
elementImage.src = recipe.image;
let elementIngredients = document.getElementById("ingredients");
elementIngredients.src = recipe.image;

