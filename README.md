# Cheese Plate Generator

## Project Idea

I wanted to design an app that generated sample cheese plates of 6 different cheeses given a certain flavor profile.

I came up with this idea in my quest to find a good resource that would give me new cheeses to try for a dinner party or just in general.

My ideal user base would be the 25-55 age range, namely individuals who are curious about cheese or are already self-described foodies and want to try new cheeses.

## User Stories

As a user I want to be able to determine my cheese flavor preferences.
As a user I want to be able to see a cheese plate in line with my preferences.
As a user I want to be able to see the individual cheese with a description.
As a user I want to be able to remove cheeses from my cheese plate.
As a user I want to be able to add cheeses to my cheese plate.
As a user I want to be able to save cheese plates for future reference.

## Planning/ERD

Cheeses, CheesePlates, and FlavorProfiles were my three tables.

Cheeses have many CheesePlates through FlavorProfiles, and have an id, a name, and a description.

CheesePlates have many Cheeses through FlavorProfiles, and have an id and a name.

FlavorProfiles have one CheesePlate, amd  have a name and a reference to cheese_plate_id.

(http://i.imgur.com/TFFjQcM.png)

## Routing Requests

Cheese to find a given cheese, cheeseplate to find a given cheese plate, and then flavor_profile to find corresponding cheese plates.

## Wireframes

(http://i.imgur.com/rBw3UOL.png)<br>
(http://i.imgur.com/ZSkNitH.jpg)<br>
(http://i.imgur.com/R8mJ9x5.png)<br>

## Timetable

1. UI - ideally completed over break/ 1 day
1. Authentication API - 1 day
1. Cheese plate API - 2 days
1. General clean-up/refinement - 1 day/weekend before submission
