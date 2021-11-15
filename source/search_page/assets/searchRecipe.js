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
          margin-left:12px;
          text-align: center;
        }
        
        
        
        
        
        
        
        
        `;
        

        styleElem.innerHTML = styles;

        const recipe = document.createElement('article');
        recipe.setAttribute('href',"")

        const recipe_title = document.createElement('p');
        recipe_title.setAttribute('href',"")
        recipe_title.setAttribute('class','headline')

        const recipe_img = document.createElement('img');
        const time_circle = document.createElement('div');
        time_circle.setAttribute('class', 'circle')


        const time_numb = document.createElement('p')
        time_numb.setAttribute('class', 'recipe-time')

        time_numb.innerHTML = "14";


        recipe_img.setAttribute('src','images/pasta.jpeg')

        recipe_title.innerHTML = data;

        
        recipe.appendChild(recipe_title);
        recipe.appendChild(recipe_img);
        time_circle.appendChild(time_numb)
        recipe.appendChild(time_circle);

        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(recipe);
      
  
 
  
        }
  }
  
  customElements.define('search-recipe', SearchRecipe);