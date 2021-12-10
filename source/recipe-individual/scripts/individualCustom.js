
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
        
        .top-container {
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
            display: flex;
            align-items: center;
            flex-direction: column;
            border-style: solid;
            border-width: 2px;
            border-color: #b90c0c;
            border-radius: 1em;
        }
        
        .top-container h1 {
            font-size: calc(4vmax);
            font-family: 'Varela Round', sans-serif;
            color: #b90c0c;
        }

        .top-container h2 {
            font-family: "'Varela Round', sans-serif;
            color:rgb(92, 4, 4);
        }
        
        .top-container p{
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
        
        .right-container {
            position: absolute;
            /* float: bottom; */
            left: calc(75.5vw);
            /* text-align: left; */
            /* top: calc(41rem);
            left: calc(79vw); */
            font-size: calc(1.25vw);
            width: calc(20vw);
            /* margin-top: calc(4rem); */
            /* height: 15vw; */
        }
        
        .right-container img {
            width: 100%;
        }
        
        .ingredients-text {
            /* position: relative;
            float: bottom; */
            text-align: left;
            /* left: 20vw; */
            top: 0;
            font-size: calc(1.25vw);
            padding: 1px;
            border-style: solid;
            border-width: 2px;
            border-color: #b90c0c;
            border-radius: 1em;
        }
        
        .ingredients-text h2 {
            text-align: center;
            font-family: 'Varela Round', sans-serif;
            color: #b90c0c;
        }
        
        .directions-text {
            /* position: relative;
            float: bottom; */
            text-align: left;
            /* left: 20vw; */
            top: 0;
            font-size: calc(1.25vw);
            width: calc(60vw);
            margin-left: calc(7.5vw);;
            padding-bottom: 1px;
            border-style: solid;
            border-width: 2px;
            border-color: #b90c0c;
            border-radius: 1em;
        }
        
        .directions-text h2 {
            text-align: center;
            color: #b90c0c;
        }
        
        .ratings-box {
            justify-content: center;
            align-items: center;
            display: flex; 
            flex-direction: row;
            column-gap: 0.5em;
        }
        
        .stars {
            width: 20%;
        }

        .timerCircle {
            width: 3.5em;
            height: 3.5em;
            background: #b90c0c;
            border-radius: 100%;
            visibility: visible;
            display: flex;
            border-style: solid;
            border-width: 0.1em;
            border-color: black;
            justify-content: center;
            align-items: center;
            text-decoration: none !important;
            color: white;
        }

        .timerButton {
            background: white;
            border-style: solid;
            border-width: 0.1em;
            border-color: #b90c0c;
            height: 50%;
            border-radius: 1em;
        }

        .timerButton:hover {
            box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
        }

        .timerDiv {
            display: flex;
            align-items: center;
            column-gap: 0.5em;
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
            margin-left: 82vw;
            padding_left: 3em;
            top: 1em;
            background-color:none;
          }
          .logoImg {
           position: absolute;
           justify-items: end;
           padding-left: .2em;
           padding-right: 5em;
           top: 1.2em;
           width: 8%;
           left: 0vw;
          }
          .logoText {
            position: absolute;
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
            font-family: 'Varela Round', sans-serif;
            font-size: 5vh;
            text-decoration: wavy;
            color: black;
            margin-left: 8%;
            top: 0em;
            margin-top: 9%;
            padding-top: 0%;
          }
          h3{
            font-family: 'Varela Round', sans-serif;
            width: 8vw;
            justify-self: left;
          }
          .timer{
            font-size: 5vh;
            font-family: 'Varela Round', sans-serif;
          }
          p {
            font-family: 'Varela Round', sans-serif;
            font-size: 7%;
          }

          li {
            font-family: 'Varela Round', sans-serif;
          }

          h2 {
            font-family: 'Varela Round', sans-serif;
          }

          a, 
          a label {
            cursor: pointer;
          }
          img:hover {
            color: rgba(255, 255, 255, 1);
            box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
          }
        `;
        /*Adjusted W3Schools showSnackbar to show multiple different snackbars depending on id*/
        function showSnackbar(id) {
            // Get the snackbar DIV
            var snackbar = document.getElementById(id);
            // Add the "show" class to DIV
            snackbar.className = "show";
          
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
        } 

        function removeRecipe(node){
            localStorage.removeItem(node);
        }
        styleElem.innerHTML = styles;
        
        const container = document.createElement("div");

        const rightContainer = document.createElement("div");
        rightContainer.setAttribute("class", "right-container");
            const thumbnail = document.createElement("img");
            thumbnail.setAttribute("src",data.image);
            const ingredientsContainer = document.createElement("div");
            ingredientsContainer.setAttribute("class", "ingredients-text");
                const ingredientsHeadline = document.createElement("h2");
                ingredientsHeadline.innerHTML = "Ingredients";
                const ingredientsText = document.createElement("ul");
                for(var i = 0; i < data.extendedIngredients.length; i++) {
                    const single = document.createElement("li");
                    single.innerHTML = data.extendedIngredients[i].original;
                    ingredientsText.appendChild(single);
                }
            ingredientsContainer.appendChild(ingredientsHeadline);
            ingredientsContainer.appendChild(ingredientsText);
        rightContainer.appendChild(thumbnail);
        rightContainer.appendChild(ingredientsContainer);

        const topMiddleContainer = document.createElement("div");
        topMiddleContainer.setAttribute("class", "top-container");
            // recipe title
            const recipeTitle = document.createElement("h1");
            recipeTitle.innerHTML = data.title;
            // show the overall time
            const cookTime = document.createElement("h2");
            cookTime.innerHTML = data.readyInMinutes + " min";
            // cookTime.setAttribute("font-size", "7%");
            // creating a div for our timer
            const timerDiv = document.createElement("div");
            timerDiv.setAttribute("class", "timerDiv");
                let timer = document.createElement("div");
                // initialize our circle for timer and it's corresponding buttons
                timer.setAttribute("class", "timerCircle");
                timer.textContent = data.readyInMinutes + ":00";
                const startButton = document.createElement("button");
                startButton.setAttribute("class", "timerButton")
                const pauseButton = document.createElement("button");
                pauseButton.setAttribute("class", "timerButton");
                startButton.textContent = 'Start';
                pauseButton.textContent = 'Pause';
                // create our countdown function with pause and start for our timer
                let start = false;
                let startTime = data.readyInMinutes*60;
                let timed = startTime, minutes, seconds;
                setInterval(function () {
                    if(start) {
                        minutes = parseInt(timed / 60, 10)
                        seconds = parseInt(timed % 60, 10);
                
                        minutes = minutes < 10 ? "0" + minutes : minutes;
                        seconds = seconds < 10 ? "0" + seconds : seconds;
                
                        timer.textContent = minutes + ":" + seconds;
                
                        if (--timed < 0) {
                            timed = 0;
                            let alarm = new Audio('./sounds/alarm.mp3');
                            alarm.play();
                            timed = startTime;
                            start = false;
                            showSnackbar("timesUp");
                        }
                    }
                }, 1000);
                startButton.addEventListener("click", function(e) {
                    e.preventDefault();
                    start = true;
                });
                pauseButton.addEventListener("click", function(e) {
                    e.preventDefault();
                    start = false;
                });
                const snackbarTimer= document.createElement("div");
                snackbarTimer.setAttribute("id", "timesUp");
                snackbarTimer.innerHTML = "Time is Up!";
                document.body.appendChild(snackbarTimer);
            // create our description element which is simply just a paragraph
            const description = document.createElement("p");
            description.innerHTML = data.summary;
                // ensure that the links properly work for our description
                const summaryLinks = description.querySelectorAll("a");
                summaryLinks.forEach(
                    element => {
                        const curr = element.href;
                        console.log(curr);
                        const lastDash = curr.lastIndexOf("-");
                        element.href = `index.html?${curr.substring(lastDash+1)}`;
                });
            const ratingBox = document.createElement("div");
            ratingBox.setAttribute("class", "ratings-box");
                // create a div to hold our stars img
                const starsDiv = document.createElement("div");
                    const stars = document.createElement("img");
                    const starScore = Math.round(data.spoonacularScore/20);
                    stars.setAttribute("src", `./images/${starScore}-star.svg`);
                    stars.setAttribute("class", "stars");
                    starsDiv.appendChild(stars);
                // create a div to hold our total likes count
                const ratingsDiv = document.createElement("div");
                    const ratings = document.createElement("p");
                    ratings.innerHTML = data.aggregateLikes + " Likes";
                    ratingsDiv.appendChild(ratings);
                // create our fav button which will let us favorite the recipe
                const favorite = document.createElement("a");
                    favorite.setAttribute("class", 'favorite');
                    favorite.setAttribute("id", 'favorite');
                    const favImage = document.createElement("img");
                    const snackbarFav = document.createElement("div");
                    document.body.appendChild(snackbarFav);
                    snackbarFav.setAttribute("id", "favNotif");
                    snackbarFav.innerHTML = "Recipe Favorited!";
                    const snackbarUnfav = document.createElement("div");
                    snackbarUnfav.setAttribute("id", "unfavNotif");
                    snackbarUnfav.innerHTML = "Recipe Unfavorited!";
                    document.body.appendChild(snackbarUnfav);
                    if(localStorage.getItem(data.title) == null){
                        favImage.setAttribute("src", "images/favorite.png");
                    }else{
                        favImage.setAttribute("src", "images/unfavorite.png");
                    }
                    favImage.setAttribute("height", "7%");
                    favImage.setAttribute("width", "10%");
                    favorite.appendChild(favImage);
                    favorite.addEventListener("click", function() {
                        if(localStorage.getItem(data.title) == null){
                            var thumbnail = {"totalTime" : data.readyInMinutes, 
                            "title" : data.title, "id": data.id, "thumbnailUrl": data.image}
                            localStorage.setItem(data.title, JSON.stringify(thumbnail))
                            console.log(localStorage);
                            favImage.setAttribute("src", "images/unfavorite.png");
                            showSnackbar("favNotif");
                        }else {
                            favImage.setAttribute("src", "images/favorite.png");
                            removeRecipe(data.title);
                            showSnackbar("unfavNotif");
                        }
                    });
                const favoriteDiv = document.createElement("div");
                favoriteDiv.appendChild(favorite);
        topMiddleContainer.appendChild(recipeTitle);
        topMiddleContainer.appendChild(cookTime);
        timerDiv.appendChild(timer);
        timerDiv.appendChild(startButton);
        timerDiv.appendChild(pauseButton);
        topMiddleContainer.appendChild(timerDiv);
        topMiddleContainer.appendChild(description);
        ratingBox.appendChild(starsDiv);
        ratingBox.appendChild(ratingsDiv);
        ratingBox.appendChild(favoriteDiv);
        topMiddleContainer.appendChild(ratingBox);

        const bottomMidContainer = document.createElement("div");
        bottomMidContainer.setAttribute("class", "directions-text");
            // create our instructions header
            const instructionsHeader = document.createElement("h2");
            instructionsHeader.innerHTML = "Instructions";
            // create our list of instructions, while also ensuring we do a check to know that those instructions are valid
            const instructions = document.createElement("ol");
            let instructionsArray = [];
            if(data.analyzedInstructions[0]) {
                instructionsArray = data.analyzedInstructions[0].steps;
                for(var i = 0; i < instructionsArray.length; i++) {
                    console.log(instructionsArray[i]);
                    const single = document.createElement("li");
                    single.innerHTML = instructionsArray[i].step;
                    if(instructionsArray[i].length) {
                        const timerDiv1 = document.createElement("div");
                        timerDiv1.setAttribute("class", "timerDiv");
                        let timer1 = document.createElement("div");
                        timer1.setAttribute("class", "timerCircle");
                        timer1.textContent = instructionsArray[i].length.number + ":00";
                        const startButton1 = document.createElement("button");
                        const pauseButton1 = document.createElement("button");
                        startButton1.textContent = 'Start';
                        startButton1.setAttribute('class', 'timerButton');
                        pauseButton1.textContent = 'Pause';
                        pauseButton1.setAttribute('class', 'timerButton');
                        let start1 = false;
                        let startTime1 = instructionsArray[i].length.number*60;
                        let timed1 = startTime1, minutes1, seconds1;
                        setInterval(function () {
                            if(start1) {
                                minutes1 = parseInt(timed1 / 60, 10)
                                seconds1 = parseInt(timed1 % 60, 10);
                        
                                minutes1 = minutes1 < 10 ? "0" + minutes1 : minutes1;
                                seconds1 = seconds1 < 10 ? "0" + seconds1 : seconds1;
                        
                                timer1.textContent = minutes1 + ":" + seconds1;
                        
                                if (--timed1 < 0) {
                                    timed1 = 0;
                                    let alarm = new Audio('./sounds/alarm.mp3');
                                    alarm.play();
                                    timed1 = startTime1; // uncomment this line to reset timer automatically after reaching 0
                                    start1 = false;
                                    showSnackbar("timesUp");
                                }
                            }
                        }, 1000);
                        startButton1.addEventListener("click", function(e) {
                            e.preventDefault();
                            start1 = true;
                        });
                        pauseButton1.addEventListener("click", function(e) {
                            e.preventDefault();
                            start1 = false;
                        });
                        instructions.appendChild(single);
                        timerDiv1.appendChild(timer1);  
                        timerDiv1.appendChild(startButton1);
                        timerDiv1.appendChild(pauseButton1);
                        instructions.appendChild(timerDiv1);    
                    }
                    else {
                        instructions.appendChild(single);
                    }
                }
                bottomMidContainer.appendChild(instructionsHeader);
                bottomMidContainer.appendChild(instructions);
            }

        container.appendChild(rightContainer);
        container.appendChild(topMiddleContainer);
        container.appendChild(bottomMidContainer);

        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(container);
    }
}

customElements.define("recipe-individual", IndividualCustom);
