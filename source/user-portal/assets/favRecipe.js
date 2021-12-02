
/**
 * Custom FavRecipe html element: 
 * Used on user portal page for storing user's farvorite recipes
 * @extends HTMLElement
 */
class FavRecipe extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
  
    set data(data) {
        const styleElem = document.createElement("style");
        const styles = `
        
        article{
            display: grid;
            align-items: center;
            width: calc(20vw);
            grid-template-rows: calc(10vh) calc(26vh);
            height: calc(40vh);
            row-gap: calc(.7vh);
            border: 3px solid black;
            background-color: white;
            border-radius: 10px;
        }
        article > p {
            font-family: 'Varelia Round', sans-serif;
            font-size: calc(2.5vh);
            align-items: center;
            margin-top: 20px;
            margin-left: 15px;
            margin-right: 15px;
            max-width: calc(20vw);
            overflow: hidden;
            text-decoration: none !important;
            color: black !important
        }
      
        div > p {
            font-family: 'Varela Round', sans-serif;
            font-size: calc(2.5vh);
            align-items: center;
            margin-top: calc(2vh);
            margin-left: calc(2vw);
            margin-right: calc(0.8vw);
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
            width: calc(3.2vw);
            height: calc(3.2vw);
            background: #b90c0c;
            border-radius: 50%;
            position: relative; 
            visibility: visible; 
            left: calc(15vw); 
            bottom: calc(6.5vh);
            border-style: solid;
            border-width: 2px;
            border-color: black;
            
        }
        .recipe-time {
            color: white;
            margin-left:12px;
            text-align: center;
            text-decoration: none !important;
            color: black !important
        }
        button {
            width: 100px;
            margin-left: 65px;
            margin-bottom: .3vh;
        }
        `;
        /*
            article{
                display: grid;
                align-items: center;
                width: calc(20vw);
                grid-template-rows: calc(10vh) calc(26vh);
                height: calc(40vh);
                row-gap: calc(.7vh);
                border: 3px solid black;
                background-color: white;
                border-radius: 10px;
            }

            article > p {
                font-family: 'Varelia Round', sans-serif;
                font-size: calc(2.5vh);
                align-items: center;
                margin-top: 20px;
                margin-left: 15px;
                margin-right: 15px;
                max-width: calc(20vw);
                overflow: hidden;
                text-decoration: none !important;
                color: black !important
            }
          
            div > p {
                font-family: 'Varela Round', sans-serif;
                font-size: calc(2.5vh);
                align-items: center;
                margin-top: calc(2vh);
                margin-left: calc(2vw);
                margin-right: calc(0.8vw);
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
                width: calc(3.2vw);
                height: calc(3.2vw);
                background: #b90c0c;
                border-radius: 50%;
                position: relative; 
                visibility: visible; 
                left: calc(15vw); 
                bottom: calc(6.5vh);
                border-style: solid;
                border-width: 2px;
                border-color: black;
                
            }

            .recipe-time {
                color: white;
                margin-left:12px;
                text-align: center;
                text-decoration: none !important;
                color: black !important
            }
            button {
                width: 100px;
                margin-left: 65px;
                margin-bottom: .3vh;
            }
        `;
        */
        
        styleElem.innerHTML = styles;

        const recipe = document.createElement("article");

        let recipeTitle = document.createElement("p");

        let recipeImg = document.createElement("img");

        let timeCircle = document.createElement("div");
        timeCircle.setAttribute("class", "time");

        let timeNumb = document.createElement("p");
        timeNumb.setAttribute("class", "recipe-time");
        let timeText = document.createTextNode("");
        var link;


        if(data === "Favorite more recipes!"){
            // Adding Title
            const text = document.createTextNode("Please favorite more recipes!");
            recipeTitle.appendChild(text);

            // Adding Img
            recipeImg.setAttribute("src", 'images/sadburger.gif');

            // Adding Time
            timeText.nodeValue = "0";
            timeNumb.appendChild(timeText);
        }
        else{

            let json = JSON.parse(localStorage.getItem(data));

            // Adding Title
            const text = document.createTextNode(data);
            recipeTitle.appendChild(text);

            // Adding Img
            let value = searchForKey(json, "thumbnailUrl");
            recipeImg.setAttribute("src", value);

            // Adding Time
            value = searchForKey(json, "totalTime");
            timeText.nodeValue = value;
            timeNumb.appendChild(timeText);

            link = document.createElement("a")
            link.setAttribute("href",  `../recipe-individual/index.html?${json.id}`)
            link.setAttribute("class", 'link');
        }

        let removeBut = document.createElement("BUTTON");
        removeBut.innerHTML = "Remove";
       
        recipe.appendChild(recipeTitle);
        recipe.appendChild(recipeImg);
        recipe.appendChild(removeBut);
        timeCircle.appendChild(timeNumb);
        recipe.appendChild(timeCircle);
        recipe.appendChild(removeBut);
        removeBut.click(removeRecipe(data));
        this.shadowRoot.appendChild(styleElem); 


        if (link){
            link.appendChild(recipe)
            this.shadowRoot.appendChild(link);
        } else {
            this.shadowRoot.appendChild(recipe);
        }

    }
}
/**
 * CREDITS to Lab 6 Starter Code.
 * 
 * Recursively search for a key nested somewhere inside an object
 * @param {Object} object the object with which you'd like to search
 * @param {String} key the key that you are looking for in the object
 * @returns {*} the value of the found key
 */
function searchForKey(object, key) {
    var value;
    Object.keys(object).some(function (k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === "object") {
            value = searchForKey(object[k], key);
            return value !== undefined;
        }
    });
    return value;
}

function removeRecipe(node){
    localStorage.removeItem(node);
}

customElements.define("fav-recipe", FavRecipe);
