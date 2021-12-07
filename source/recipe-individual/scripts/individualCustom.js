
/**
 * custom element used to display individual page
 * @extends HTMLElement 
 */
class IndividualCustom extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: "open"});
    }

    startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = 0;
                // timer = duration; // uncomment this line to reset timer automatically after reaching 0
            }
        }, 1000);
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
            background-color: #b90c0c;
            color: white;
        }
        
        .image-box h1 {
            font-size: calc(4vmax);
            font-family: 'Varela Round', sans-serif;
            color: rgb(210, 210, 210);
        }

        .image-box h2 {
            font-family: "'Varela Round', sans-serif;
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
            background-color: #b90c0c;
            padding: 1px;
            color: white; 
        }
        
        .essay-text h2 {
            text-align: center;
            font-family: 'Varela Round', sans-serif;
            color: rgb(210, 210, 210);
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
            color: white;
            background-color: #b90c0c;
            padding-bottom: 1px;
        }
        
        .directions-text h2 {
            text-align: center;
            color: rgb(210, 210, 210);
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
          p {
            font-family: 'Varela Round', sans-serif;
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
          #unfavNotif {
            visibility: hidden; /* Hidden by default. Visible on click */
            min-width: 250px; /* Set a default minimum width */
            margin-left: -125px; /* Divide value of min-width by 2 */
            background-color: #333; /* Black background color */
            color: #fff; /* White text color */
            text-align: center; /* Centered text */
            border-radius: 2px; /* Rounded borders */
            padding: 16px; /* Padding */
            position: fixed; /* Sit on top of the screen */
            z-index: 1; /* Add a z-index if needed */
            left: 50%; /* Center the snackbar */
            bottom: 30px; /* 30px from the bottom */
          }
          #favNotif.show,
          #unfavNotif.show {
              visibility : visible;
              -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
              animation: fadein 0.5s, fadeout 0.5s 2.5s;
          }
          @-webkit-keyframes fadein {
            from {bottom: 0; opacity: 0;}
            to {bottom: 30px; opacity: 1;}
          }
          
          @keyframes fadein {
            from {bottom: 0; opacity: 0;}
            to {bottom: 30px; opacity: 1;}
          }
          
          @-webkit-keyframes fadeout {
            from {bottom: 30px; opacity: 1;}
            to {bottom: 0; opacity: 0;}
          }
          
          @keyframes fadeout {
            from {bottom: 30px; opacity: 1;}
            to {bottom: 0; opacity: 0;}
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
        let timer = document.createElement("h2");
        // timer.setAttribute("id", "safeTimerDisplay");
        timer.textContent = data.readyInMinutes + ":00";
        let start = false;
        let startTime = data.readyInMinutes*60;
        const startButton = document.createElement("button");
        const pauseButton = document.createElement("button");
        startButton.textContent = 'Start';
        pauseButton.textContent = 'Pause';
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
                    // timer = duration; // uncomment this line to reset timer automatically after reaching 0
                }
                startTime--;
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
        cookTime.setAttribute("font-size", "7%");
        const description = document.createElement("p");
        description.innerHTML = data.summary;
        const summaryLinks = description.querySelectorAll("a");
        summaryLinks.forEach(
            element => {
                const curr = element.href;
                console.log(curr);
                const lastDash = curr.lastIndexOf("-");
                element.href = `index.html?${curr.substring(lastDash+1)}`;
        });
        console.log(summaryLinks);
        console.log(description.innerHTML);
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
        topMiddleContainer.appendChild(timer);
        topMiddleContainer.appendChild(startButton);
        topMiddleContainer.appendChild(pauseButton);
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
        for(var i = 0; i < instructionsArray.length; i++) {
            console.log(instructionsArray[i]);
            const single = document.createElement("li");
            single.innerHTML = instructionsArray[i].step;
            if(instructionsArray[i].length) {
                let timer1 = document.createElement("p");
                timer1.textContent = instructionsArray[i].length.number + ":00";
                let start1 = false;
                let startTime1 = instructionsArray[i].length.number*60;
                // timer.setAttribute("id", "safeTimerDisplay");
                const startButton1 = document.createElement("button");
                const pauseButton1 = document.createElement("button");
                startButton1.textContent = 'Start';
                pauseButton1.textContent = 'Pause';
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
                            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
                        }
                        startTime1--;
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
                instructions.appendChild(timer1);  
                instructions.appendChild(startButton1);
                instructions.appendChild(pauseButton1);    
            }
            else {
                instructions.appendChild(single);
            }
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
