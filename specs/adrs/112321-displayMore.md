# Is 30 recipes enough?

* Status: Accepted
* Deciders: 
  - Everyone
* Date: 11-23-2021

## Context and Problem Statement

Our recipes on the search page were being limited to 30 recipes per call. But what if the user wanted more than the same 30 recipes being loaded?

## Decision Drivers 

* Our API keys are limited in the number of calls
* We need to retain users, rather than build for a product

## Considered Options

* Leave the limit for 30 recipes, but shuffle the recipes that are displayed
* Show 100 recipes!
* Add a "Show More" button after the first set

## Decision Outcome

In the end, we decided to create a Show More button, but also limit it to 100 recipes. The list would continue to load more sets with each "show more" click, but stop at 100
recipes. This was the BEST case scenario that we could conlcude due to the struggles of using the free version of Spoonacular. While we decided to invest in the student version, 
we still needed to watch the amount of calls that we were making.

--------------------------------------------
