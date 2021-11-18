class SearchRecipe extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({mode: 'open'});
    }
  
    set data(data) {
        const styleElem = document.createElement('style');
        const styles = `
        
          article{
            display: grid;
            width: 240px;
        
            grid-template-rows: 100px 140px 20px;
            row-gap: 0;
            border-style: solid;
            border-width: 2px;
            border-color: #b90c0c;
            border-radius: 10px;
            text-align: center;
            margin-left: 10;

        }
        p {
          font-family: 'Varela Round', sans-serif;
          font-size: 2.5vh;
          margin-top: 20
          margin-left: 15px;
          margin-right: 15px;
        }
        
        img {
            object-fit: cover;
            width: 220px;
            max-height: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
        }

        div {
          width: 60px;
          height: 60px;
          background: #b90c0c;
          border-radius: 50%;
          position: relative; 
          visibility: visible; 
          left: 170px; 
          bottom: 60px;
          border-style: solid;
          border-width: 2px;
          border-color: black;
        }

        .recipe-time {
          color: white;
          margin-left:4px;
          text-align: center;
        }
        `;

        
        //circle.textContent = "<" + recipe.readyInMinutes + "min";
        

        styleElem.innerHTML = styles;

        const recipe = document.createElement('article');
        recipe.setAttribute('href',"");

        const recipeTitle = document.createElement('p');
        recipeTitle.setAttribute('href',"");
        recipeTitle.setAttribute('class','headline');

        const recipeImg = document.createElement('img');
        const timeCircle = document.createElement('div');
        timeCircle.setAttribute('class', 'circle');


        const timeNumb = document.createElement('p')
        timeNumb.setAttribute('class', 'recipe-time');

        timeNumb.innerHTML = "<" + data.readyInMinutes + "min";
        console.log(data.readyInMinute);

        recipeImg.setAttribute('src',data.image);

        

        recipeTitle.innerHTML = data.title;

        
        recipe.appendChild(recipeTitle);
        recipe.appendChild(recipeImg);
        timeCircle.appendChild(timeNumb);
        recipe.appendChild(timeCircle);

        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(recipe);
        }
  }
  
  customElements.define('search-recipe', SearchRecipe);