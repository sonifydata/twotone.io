---
layout: article
title: NYC 311 Rodent Complaints
short-title: ''
date: 2019-03-04 23:00:00 -0500
modified: ''
categories:
- examples
excerpt: Rats! All the rodent complains in New York City.
featured: false
tags:
- video
image:
  feature: ''
  teaser: ''
  credit: ''

---
The NYC Open Data Portal provides a list of all calls to 311 about [rodent complaints](https://data.cityofnewyork.us/Social-Services/311-Rodent-Complaints/cvf2-zn8s), from 2010 to present.

For this sonification, we decided to jazz it up with instruments and rhythms that felt appropriate for the topic:

* **Conditions Attracting Rodents** - Double Bass in a steady, seasonal cycle representing background conditions for the other data values
* **Mouse Sightings** - small and high pitched Glockenspiel, almost cute, but not quite
* **Rat Sightings** - a piano, played in unsettling triplets.
* **Rodent Bites** - a recording of someone exclaiming ["Ow!"](https://freesound.org/people/Topschool/sounds/442602/), triggered once in each of the thankfully rare occurrences.

Since there were almost a quarter of a million calls over eight years, the data required a bit of editing to make it manageable. A simple pivot table suffices, with call dates grouped into months as row headers and complaint description as column headers.