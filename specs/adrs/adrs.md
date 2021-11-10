# Architectural Decision Records 

  Written by Brian Nhieu
  
  Templete found [here](https://github.com/adr/madr/blob/main/template/adr-template.md)
  
--------------------------------------------

# Change of Branding

* Status: Accepted
* Deciders: 
  - Nicholas(Lead) 
  - George(Lead) 
  - Nico 
  - Liza 
  - Justin
  - Reny
  - Brian
* Date: 10-21-2021

## Context and Problem Statement

As a group, we decided that we wanted to create a "stand-out" feature that would be related to how we present our brand. Previously, 
we were named Big Bytes. 

## Decision Drivers 

* We wanted to try to target a specific audience (Professor reccomendation), while also being open enough for other users (Hema's reccommendation). The group
that we thought of were hungry college students, and we opened up that idea by including people with little time to cook.
* As a result, we decided on features that would focus on quick recipes!

## Considered Options

* Keep Big Bytes
* Change to Quick Bytes

## Decision Outcome

Changed to Quick Bytes, because this allows us to create features that would cater towards our target group. It would also create a "stand out" feature where 
people would come to our site for a simple UI that would find them quick recipes!

--------------------------------------------

# UI Layout (Rough)

* Status: accepted
* Deciders: 
  - Nicholas(Lead) 
  - George(Lead) 
  - Nico 
  - Liza 
  - Justin
  - Reny
  - Brian
* Date: 10-21-2021

## Context and Problem Statement

We wanted to have a rough idea of what our front page would look like. What kind of User Interface would be user-friendly and accessible for all potential users?

## Decision Drivers 

* Something quick and accessible!

## Considered Options

* An open page where users could browse for recipes
* For quick and accessible, users will have to navigate to an under 20 min category
* Users are prompted with 4 simple choices: 1 - 5 minutes, 2 - 10 minutes, 3 - 20 minutes, 4 - A search bar

## Decision Outcome

Option 3. This helps signify our choices to why we needed to re-brand. By creating a simple UI, users are able to quickly choice HOW much time they have for their
next meal. We also decided to modify this choice by doing <5 minutes, <10 minutes and <20 minutes, creating a more accessible and user-friendly site. By including the
search bar, we allow for users to search for specific recipes that they are interested in, rather than locking them in for specific time frames. Of course, if the user 
wanted to **NOT** choose a time frame, we allow the functionality of scrolling down and finding a unfiltered list!

We found that many recipe sites are too focused on showing tens of different recipes on their main page. It got very confusing and frightening to try to find a recipe 
that a normal user could make. Not only that, their website UI was confusing! The best accessible one that interested us was epicurious, and is what helped influence our design.
(Pending Search Bar below)

## Examples 
<img src="/admin/images/Epicurious-Example.png" width="450" height="280">  <img src="/admin/images/Home-Page-Rough.png" width="450" height="280">

--------------------------------------------

# Storage Types

* Status: Accepted
* Deciders: 
  - Nicholas(Lead) 
  - George(Lead) 
  - Nico 
  - Liza 
  - Justin
  - Reny
  - Brian
  - Kai
  - Klein
  - Peder
* Date: 10-26-2021

## Context and Problem Statement

We needed to narrow our scope for what features we wanted to add in the span of time that we had. We needed to focus on the MVP and decide what features would work
in the decision of whether we use local or cloud storage.

## Decision Drivers 

* Local storage is free and there's documentation to use it.
* Cloud storage could come at a price.
* Many of us do not have experience with cloud storage, thus creating more time in the limited timeline.

## Considered Options

* Work with cloud storage (AWS, GCP)
* Work with local storage

## Decision Outcome

We decided on working with local storage. Per Hema's recommendation, it allows us to save simple data that the site will contain after refresh. This is perfect for our case
use because we did not need to store large amounts of data. If we wanted to store more, we need to dedicate more members towards learning cloud storage and could create a 
scenario where we aren't able to complete an MVP.

--------------------------------------------

# Recipe API 

* Status: Accepted
* Deciders: 
  - Nicholas(Lead) 
  - George(Lead) 
  - Nico 
  - Liza 
  - Justin
  - Reny
  - Brian
  - Kai
  - Klein
  - Peder
* Date: 10-26-2021

## Context and Problem Statement

As a group, we decided to research different recipe APIs that we could use to populate our recipe manager. Looking through the top options, we narrowed our decision 
between 3 different APIs. 

## Decision Drivers 

* We needed a API that would be simple and intuitive for our searching purposes. We needed a recipe that would have tags, a searching function, and FREE to use. 
* A popular API because it would help us find a bunch of debugging help online.
* Highly rated.
* Recommendation from Hema(our TA).

## Considered Options

* Spoonacular
* MyCookbook.io
* Tasty

## Decision Outcome

Ultimately, we decided on Spoonacular as our recipe API. This is because of the recommendation from our TA, and because of how highly rated Spoonacular is. Furthermore, they
provide the perfect service where we would not need to code our own search engine, or tagging system for our recipes. *Also, it provides a grocery list function that we could
use to expand our MVP!

--------------------------------------------

# Web Page Layout

* Status: Accepted
* Deciders: 
  - Nicholas(Lead) 
  - George(Lead) 
  - Nico 
  - Liza 
  - Justin
  - Reny
  - Brian
  - Kai
  - Klein
  - Peder
* Date: 10-26-2021

## Context and Problem Statement

We needed to decide how the pages would connect, and how users would interact with our page. 

## Decision Drivers 

* We really wanted to have our user portal because it allowed us to expand towards a possible grocery lists
* An accessible home page
* Quick and formatted site that users would not get lost in

## Considered Options

* Home Page (Redirecting to filtered/unfiltered search) -> Search Page (List of recipes) -> Recipe Page (The entire document for the recipe) -> User Portal (Collection of fav.)
* Home Page (Redirect to filtered time ONLY) -> Search Page (List - opens to full recipe) -> User Portal (Collection of fav.)
* Home Page (Search bar ONLY) -> Search Page (List of recipes) -> Recipe Page (The entire document) 

## Decision Outcome

We went with Option 1. This allows us to have a solid foundation of a MVP and gives us room to expand small features that wouldn't require a long sprint. We avoided option 2, because opening up the recipe results could cause a bigger issue in mobile users and allocating the correct space on the page.

--------------------------------------------

# User Image Expansion

* Status: Accepted
* Deciders: 
  - Brian
  - Klein

* Date: 11-08-2021

## Context and Problem Statement

We were running into issues with saving the user input onto Local Storage. Upon further research, local storage has a limited amount of space that we can use. Uploading
High Definition images could potentially fill up the entire storage, thus creating more issues down the line.

## Decision Drivers 

* We need a MVP and thus we can't spend too much time on a single feature.
* We can't ignore the fact that local storage has limited space.

## Considered Options

* Continue with custom user inputs
* Limit user selection to custom icons that we compile

## Decision Outcome

We went with the decision to limit user selection. This was a decision that needed to be updated because of the potential bugs that could occur in our build. It also allows
users less options, thus taking more of the developer burden off our shoulders. If we continued, we could have faced issues with .gifs or other formats for images.

--------------------------------------------
