window.addEventListener('DOMContentLoaded', init);

function init() {
    // Search recipe with key word
    
    let apiKey='1a75396eadf347a5ad84f4c37723d29f';
    let id;

    // apiKey: unique, link to your spoonacular id
    // query: where you put your key words
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=1a75396eadf347a5ad84f4c37723d29f&query=chicken')
        .then(response => response.json())
        .then(data =>{           
            console.log(data);
            // get the first recipe's id
            console.log(data['results'][0]['id']);
            //console output: 638549
            id = data['results'][0]['id'];           
        })

    // get recipe by id   
    fetch('https://api.spoonacular.com/recipes/644387/information?apiKey='+apiKey)
        .then(response => response.json())
        .then(data =>{           
            console.log(data);
            //instruction
            console.log(data['instructions']);
            //popular
            console.log(data['veryPopular']);
            //time 
            console.log(data['readyInMinutes']);

        })
    // get instructions in detail
    fetch('https://api.spoonacular.com/recipes/324694/analyzedInstructions?'+apiKey)
        .then(response => response.json())
        .then(data =>{           
            console.log(data);
            //instruction
            console.log(data['instructions']);
            //popular
            console.log(data['veryPopular']);
            //time 
            console.log(data['readyInMinutes']);

        })

    // More Additions 
    // Can now Select recipies directly by minutes!!!
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=1a75396eadf347a5ad84f4c37723d29f&maxReadyTime=20')
    .then(response => response.json())
    .then(data => {           
    console.log(data);           
    })

    // Can also Combine attributes! 
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=1a75396eadf347a5ad84f4c37723d29f&maxReadyTime=20&query=chicken')
    .then(response => response.json())
    .then(data => {           
    console.log(data);           
    })

         

}





