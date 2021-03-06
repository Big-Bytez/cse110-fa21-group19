
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
        
            article {
                display: grid;
                width: 240px;
            
                grid-template-rows: 100px 140px 20px 25px;
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
                font-size: 100%;
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

            .time {
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

            button {
                width: 100px;
                margin-left: 65px;
                margin-bottom: .3vh;
            }
        `;
        
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
        let removeBut 

        if(data === "Favorite more recipes!"){
            // Adding Title
            const text = document.createTextNode("Please favorite more recipes!");
            recipeTitle.appendChild(text);

            // Adding Img
            recipeImg.setAttribute("src", 'images/sadburger.gif');

            // Adding Time
            timeText.nodeValue = "0 min";
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
            timeText.nodeValue = value + " min";
            timeNumb.appendChild(timeText);

            link = document.createElement("a")
            link.setAttribute("href",  `../recipe-individual/index.html?${json.id}`)
            link.setAttribute("class", 'link');
        
            removeBut = document.createElement("BUTTON");
            removeBut.innerHTML = "Remove";
        }
       
        if(link) {
            link.appendChild(recipeTitle);
            recipe.appendChild(link);
        }
        else{
            recipe.appendChild(recipeTitle);
        }
        recipe.appendChild(recipeImg);
        timeCircle.appendChild(timeNumb);
        recipe.appendChild(timeCircle);

        if(removeBut){
            recipe.appendChild(removeBut);
            removeBut.addEventListener("click", function(event) {
                removeRecipe(data);
            });
        }
        
        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(recipe);

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
    location.reload();
}

customElements.define("fav-recipe", FavRecipe);
