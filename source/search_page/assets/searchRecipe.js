
/**
 * custom SearchRecipe html element used on SearchRecipe page
 * @extends HTMLElement
 */
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
            width: 23vw;
        
            grid-template-rows: 5em 10em 1em;
            row-gap: 0;
            border-style: solid;
            border-width: 2px;
            border-color: #b90c0c;
            border-radius: 1em;
            text-align: center;
            margin-left: 10;

        }
        p {
          font-family: 'Varela Round', sans-serif;
          font-size: 90%;
          color: black !important;
          margin-top: 20
          margin-left: 1.5vw;
          margin-right: 1.5vw;
        }
        a:link{
          text-decoration: none !important;
        }
        img {
            object-fit: cover;
            max-height: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
        }

        div {
          width: 3.5em;
          height: 3.5em;
          background: #b90c0c;
          border-radius: 100%;
          position: relative; 
          visibility: visible; 
          left: 75%; 
          bottom: 10vh;
          border-style: solid;
          border-width: .2em;
          border-color: black;
          text-decoration: none !important; 
        }

        .recipe-time {
          color: white;
          margin-left:12px;
          margin-top: -0.00005px
          text-align: center;
          margin-bottom: 25px;
          text-decoration: none !important; 
          background-color: none;
          color: white !important;
        }
        }
        `;
        

        styleElem.innerHTML = styles;

        const recipe = document.createElement('article');

        const recipeTitle = document.createElement('p');
        //recipeTitle.setAttribute('href', `../recipe-individual/inex.html?${data.id}`);
        recipeTitle.setAttribute('class','headline');

        const link = document.createElement("a")
        link.setAttribute("href", `../recipe-individual/index.html?${data.id}` )
        link.setAttribute("class", 'link');
        

        const recipeImg = document.createElement('img');
        const timeCircle = document.createElement('div');
        timeCircle.setAttribute('class', 'circle');


        const timeNumb = document.createElement('p')
        timeNumb.setAttribute('class', 'recipe-time');

        timeNumb.innerHTML = data.readyInMinutes + "\n min";


        recipeImg.setAttribute("src", data.image);

        recipeTitle.innerHTML = data.title;

        recipe.appendChild(recipeTitle);
        recipe.appendChild(recipeImg);
        timeCircle.appendChild(timeNumb);
        recipe.appendChild(timeCircle);
        link.appendChild(recipe)

        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(link);
        }
  }
  
  customElements.define('search-recipe', SearchRecipe);