
/**
 * custom element used to display individual page
 * @extends HTMLElement 
 */
class IndividualCustom extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: "open"});
    }

    set data(data) {
        const styleElem = document.createElement("style");
        const styles = `
        .individual-container {
            position: absolute;
            margin-top: calc(0rem);
            height: auto;
        }
        
        .image-box {
            width: calc(60vw);
            /* left: calc(25vw); */
            /* margin-left: -15px; */
            /* height: calc(50vh);  */
            text-align: center;
            /* position: relative;
            float: top; */
            /* top: calc(3rem); */
            margin-top: calc(4rem);
            margin-left: calc(7.5vw); /* revert back to 17.5vw once we put side bar back*/
        }
        
        .image-box h1 {
            font-size: calc(2.75vw);
            font-family: "Abril Fatface", cursive;
            color: color:rgb(58, 3, 3);
        }

        .image-box h2 {
            font-family: "Abril Fatface", cursive;
            color:rgb(92, 4, 4);
        }
        
        .image-box p{
            font-size: calc(1.4vmax);
        }
        
        .grid-layout {
            background-color: white;
            /**position: absolute;*/
            position: absolute;
            /*margin-top: 8px;*/
            /* margin-top: calc(1.25rem); */
            display: grid;
            height: 100%;
        }
        
        .general-layout {
            background-color: rgb(235, 103, 94);
            width: calc(15vw);
            /* box-shadow: 5px 0 5px -2px #888; */
            padding-top: calc(5vmin);
            border-style: solid;
            border-color: red;
            border-width: 5px;
            /* color: red; */
            height: max(100vh, 100%);
            text-align: center;
        }
        
        .general-layout h1 {
            text-align: center;
            font-size: calc(1.5rem);
        }
        
        .application-type {
            position: absolute;
            /* float: bottom; */
            left: calc(75.5vw);
            /* text-align: left; */
            /* top: calc(41rem);
            left: calc(79vw); */
            font-size: calc(1.25vw);
            width: calc(20vw);
            margin-top: 15vh;
            /* height: 15vw; */
        }
        
        .application-type img {
            width: 100%;
        }
        
        .essay-text {
            /* position: relative;
            float: bottom; */
            text-align: left;
            /* left: 20vw; */
            top: 0;
            font-size: calc(1.25vw);
            background-color: rgb(235, 103, 94);
            padding: 1px;
            /* color: red; */
        }
        
        .essay-text h2 {
            text-align: center;
            font-family: "Abril Fatface", cursive;
        }
        
        .directions-text {
            /* position: relative;
            float: bottom; */
            text-align: left;
            /* left: 20vw; */
            top: 0;
            font-size: calc(1.25vw);
            width: calc(60vw);
            margin-left: calc(10vw);
            /* color: red; */
        }
        
        .directions-text h2 {
            text-align: center;
        }
        
        .ratings-box {
            justify-content: center;
            align-items: center;
            display: flex; 
            flex-direction: row;
        }
        
        .ratings-box > div {
            flex: auto;
            text-align: center;
        }
        
        .stars {
            width: 20%;
        }
        .top-nav{
            width: 100%;
            display:flex; 
            flex-direction: row;
          }
          .shuffle{
            position: absolute;
            justify-self: right;
            margin-top: 3.7vh;
            margin-right: 0vw;
            margin-left: 83%;
            padding-left: 3vw;
            top: .2em;
            background-color:none;
          }
          .user-portal{
            position: absolute;
            justify-self: right;
            margin-right: 0vw;
            margin-left: 88%;
            padding-left: 3em;
            top: 1em;
            background-color:none;
          }
          .logoImg {
           position:fixed;
           justify-items: end;
           padding-left: .2em;
           padding-right: 5em;
           top: 1.2em;
           width: 8%;
           left: 0vw;
          }
          .logoText {
            position:absolute;
            height: 10em;
            width: 15em;
            justify-items: begin;
            padding-left: 2.6em;
            padding-right: 8em;
            top: 0em;
            margin-top: 0%;
            padding-top: .2%;
            left: 0vw ;
            font-style: oblique;
          }
          h4{
            font-family: "Abril Fatface", cursive;
            font-size: 5vh;
            text-decoration: wavy;
            color: black;
            margin-left: 8%;
            top: 0em;
            margin-top: 9%;
            padding-top: 0%;
          }
          h3{
            font-family: "Abril Fatface", cursive;
            width: 8vw;
            justify-self: left;
          }
          p {
            font-family: "Abril Fatface", cursive;
          }

          li {
              font-family: "Abril Fatface", cursive;
          }

          h2 {
            font-family: "Abril Fatface", cursive;
          }
        `;

        styleElem.innerHTML = styles;
        
        const container = document.createElement("div");

        const rightContainer = document.createElement("div");
        rightContainer.setAttribute("class", "application-type");
        const thumbnail = document.createElement("img");
        thumbnail.setAttribute("src",data.image);
        const ingredientsContainer = document.createElement("div");
        ingredientsContainer.setAttribute("class", "essay-text");
        const ingredientsHeadline = document.createElement("h2");
        ingredientsHeadline.innerHTML = "Ingredients";
        const ingredientsText = document.createElement("ul");
        for(var i = 0; i < data.extendedIngredients.length; i++) {
            const single = document.createElement("li");
            single.innerHTML = data.extendedIngredients[i].original;
            ingredientsText.appendChild(single);
        }
        rightContainer.appendChild(thumbnail);
        ingredientsContainer.appendChild(ingredientsHeadline);
        ingredientsContainer.appendChild(ingredientsText);
        rightContainer.appendChild(ingredientsContainer);

        const topMiddleContainer = document.createElement("div");
        topMiddleContainer.setAttribute("class", "image-box");
        const recipeTitle = document.createElement("h1");
        recipeTitle.innerHTML = data.title;
        const cookTime = document.createElement("h2");
        cookTime.innerHTML = data.readyInMinutes + "min";
        const description = document.createElement("p");
        description.innerHTML = data.summary;
        const ratingBox = document.createElement("div");
        ratingBox.setAttribute("class", "ratings-box");
        const starsDiv = document.createElement("div");
        const stars = document.createElement("img");
        stars.setAttribute("src", "./images/5-star.svg");
        stars.setAttribute("class", "stars");
        starsDiv.appendChild(stars);
        const ratingsDiv = document.createElement("div");
        const ratings = document.createElement("p");
        ratings.innerHTML = data.aggregateLikes + " Likes";
        ratingsDiv.appendChild(ratings);
        const favorite = document.createElement("button");
        favorite.setAttribute("class", 'favorite');
        favorite.setAttribute("id", 'favorite');
        favorite.addEventListener("click", function() {
            var thumbnail = {"totalTime" : data.readyInMinutes, 
            "title" : data.title, "id": data.id, "thumbnailUrl": data.image}
            localStorage.setItem(data.title, JSON.stringify(thumbnail))
            console.log(localStorage);
        });
        const favImage = document.createElement("img");
        favImage.setAttribute("src", "images/favorite.png");
        favImage.setAttribute("height", "70vh");
        favImage.setAttribute("widht", "100vw");
        favorite.appendChild(favImage);
        const favoriteDiv = document.createElement("div");
        favoriteDiv.appendChild(favorite);
        topMiddleContainer.appendChild(recipeTitle);
        topMiddleContainer.appendChild(cookTime);
        topMiddleContainer.appendChild(description);
        ratingBox.appendChild(starsDiv);
        ratingBox.appendChild(ratingsDiv);
        ratingBox.appendChild(favoriteDiv);
        topMiddleContainer.appendChild(ratingBox);

        const bottomMidContainer = document.createElement("div");
        bottomMidContainer.setAttribute("class", "directions-text");
        const instructionsHeader = document.createElement("h2");
        instructionsHeader.innerHTML = "Instructions";
        const instructions = document.createElement("ul");
        const instructionsArray = data.analyzedInstructions[0].steps;
        // const instructionsArray = betterInstructions[1].split(".");
        for(var i = 0; i < instructionsArray.length; i++) {
            console.log(instructionsArray[i]);
            const single = document.createElement("li");
            single.innerHTML = instructionsArray[i].step;
            instructions.appendChild(single);
        }
        bottomMidContainer.appendChild(instructionsHeader);
        bottomMidContainer.appendChild(instructions);

        container.appendChild(rightContainer);
        container.appendChild(topMiddleContainer);
        container.appendChild(bottomMidContainer);

        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(container);
    }
}

customElements.define("recipe-individual", IndividualCustom);