
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
          color: black !important;
          margin-top: 20
          margin-left: 15px;
          margin-right: 15px;
        }
        a:link{
          text-decoration: none !important;
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