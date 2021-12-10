# Too many favorites

* Status: Accepted
* Deciders: 
  - Everyone
  - Extra Feature: George
* Date: 11-30-2021

## Context and Problem Statement

As we continued to develop the site, we realized the issue that could arise when users begin to favorite more recipes than they could even handle. It would be incredibly difficult
to manage all these different recipes and we needed a better way to organize them.

## Decision Drivers 

* Added a filters feature is VERY difficult for local storage. Before we used Spoonacular's API to filter for recipes.
* We can only save so much data in a user's local storage

## Considered Options

* Leave as is.
* Create a search bar that is dedicated to the favorites

## Decision Outcome

Well we decided to create a search bar for the favorites, which is a similr difficulty as the filters. However, in this version, we would need to expand the entire ingredients list
to find the results that we wanted. The search bar would allow users to look for keywords in the recipe title and would display those. <- Because of this, we created the reset button
that would bring all the favorites back!

Extra feature: George decided to add a special feature to filter by their cook times! So we are now able to incorporate a slight filters feature, while also searching for keywords
in a recipe's title, like Chicken or Beef.

--------------------------------------------
