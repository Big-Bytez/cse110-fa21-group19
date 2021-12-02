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
