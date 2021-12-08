# Slow cookers are messing with our cook time!

* Status: Accepted
* Deciders: 
  - Everyone
* Date: 11-16-2021

## Context and Problem Statement

We demoed our MVP but realized, from Discussion and Hema, that the times we are displaying are absurd! Users would have a hard time trying to compute what 332 minutes would mean
in hours. 

## Decision Drivers 

* Simply put, we are QUICK Bytes, not SLOW Bytes.
* Why create a bigger hassle for our developers to convert the minutes to hours and issues for CSS in displaying these numbers

## Considered Options

* Convert any time over 60 minutes to 1 hour
* Leave it as is
* Don't display any recipes over 90 minutes.

## Decision Outcome

We decided to NOT display any recipes over 90 minutes. As a result, our CSS team can relax and not worry about numbers over 2 digits or the struggles with adding hours and minutes
in the tiny circle that we had for the cook time. Plus, it continues our branding for Quick Bytes. Everything on our site should be quick to make, so why should we have recipes
that are made in a **slow** cooker?

--------------------------------------------
