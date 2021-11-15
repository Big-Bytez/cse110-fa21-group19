
async function fetchRecipes() {
    return fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&query=pasta&addRecipeInformation=True").then((response) => response.json())
}

async function searchFetchRecipes(searchBar) {
    let searchString = "https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&titleMatch=" + searchBar;
    return fetch(searchString)
    .then((response) => response.json())
}

let vals = await fetchRecipes();
console.log(vals.results[0])
for (let i = 0; i<9; i++ ){
    let element = document.createElement("article");
    element.id = "tile"
    let recipe = vals.results[i]
    console.log(recipe)
    let title = document.createElement("h1")
    title.id = "title"
    title.textContent = recipe.title
    element.appendChild(title)
    let image = document.createElement("img")
    image.src = recipe.image;
    element.appendChild(image)
    let circle = document.createElement("div")
    circle.id = "circle"
    circle.textContent = "<" + recipe.readyInMinutes + "min";
    element.appendChild(circle)
    let ElemIngredient  = document.createElement("div")
    ElemIngredient.id = "ingredients"
    let ingredients = ""
    /*
    for (let j = 0; j < Math.min(recipe.diets.length, 3); j++ ){
        ingredients = ingredients  + recipe.diets[j] + ", "
    }
    ElemIngredient.textContent= "Diets:" + ingredients + "...";
    element.appendChild(ElemIngredient)
    */
    document.getElementById("row").appendChild(element);
}

/*

let elementTitle = document.getElementById("title");
elementTitle.textContent = hi.title;
let elementImage = document.getElementById("img");
elementImage.src = recipe.image;
let elementTime= document.getElementById("circle");
elementTime.textContent = "<" + recipe.readyInMinutes + "min";
let elementIngredients= document.getElementById("ingredients");
let ingredients = ""
console.log(recipe.extendedIngredients)
for (var i = 0; i < Math.min(recipe.extendedIngredients.length, 3); i++ ){
    ingredients = ingredients  + recipe.extendedIngredients[i].name + ", "
}
elementIngredients.textContent= "Ingredients:" + ingredients + "...";

//fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&query=pasta&addRecipeInformation=True")
    //.then(response => response.json())
    //.then(data => { console.log(data) })
//
*/
