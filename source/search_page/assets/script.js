window.addEventListener('DOMContentLoaded', init);

async function init() {
    createRecipeCards();
  }

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
  