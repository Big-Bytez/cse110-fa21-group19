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
