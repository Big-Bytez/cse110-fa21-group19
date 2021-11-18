class FavRecipe extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
  
    set data(data) {
        const styleElem = document.createElement('style');
        const styles = `
        
            article{
                display: grid;
                align-items: center;
                width: 20vw;
                grid-template-rows: 110px 240px;
                height: 20vw;
                row-gap: 5px;
                border: 3px solid black;
                background-color: white;
                border-radius: 10px;
            }

            a {
                font-family: 'Varelia Round', sans-serif;
                font-size: 2.5vh;
                align-items: center;
                margin-top: 20px;
                margin-left: 15px;
                margin-right: 15px;
                max-width: 20vw;
                overflow: hidden;
            }
          
            p {
                font-family: 'Varela Round', sans-serif;
                font-size: 2.5vh;
                align-items: center;
                margin-top: 20px;
                margin-left: 15px;
                margin-right: 15px;
            }
        
            img {
                display: flex;
                object-fit: cover;
                max-height: 240px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-top: 0%;
                width: 90%;
            }

            div {
                width: 60px;
                height: 60px;
                background: #b90c0c;
                border-radius: 50%;
                position: relative; 
                visibility: visible; 
                left: 300px; 
                bottom: 60px;
                border-style: solid;
                border-width: 2px;
                border-color: black;
            }

            .recipe-time {
                color: white;
                margin-left:12px;
                text-align: center;
            }
        `;
        
        styleElem.innerHTML = styles;

        const recipe = document.createElement('article');

        const recipeTitle = document.createElement('a');
        recipeTitle.setAttribute('href',"");
        recipeTitle.setAttribute('class','title');

        const recipeImg = document.createElement('img');
        const timeCircle = document.createElement('div');
        timeCircle.setAttribute('class', 'time');

        const timeNumb = document.createElement('p')
        timeNumb.setAttribute('class', 'recipe-time');

        timeNumb.innerHTML = "0";

        recipeImg.setAttribute('src','images/sadburger.gif');

        recipeTitle.innerHTML = data;

        
        recipe.appendChild(recipeTitle);
        recipe.appendChild(recipeImg);
        timeCircle.appendChild(timeNumb);
        recipe.appendChild(timeCircle);

        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(recipe);

    }
}
  
customElements.define('fav-recipe', FavRecipe);