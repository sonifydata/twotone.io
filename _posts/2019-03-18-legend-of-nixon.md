---
layout: article
title: The Legend of Nixon - Presidential Approval Ratings as Video Game Soundscape
short-title: The Legend of Nixon
date: 2019-03-18 13:30:00 +0000
modified: ''
categories:
- examples
excerpt: Sonification case study - Richard Nixon's approval ratings as a Legend of
  Zelda soundtrack
featured: true
tags:
- polls
image:
  feature: "/images/nixon-chart.jpg"
  teaser: ''
  credit: ''

---
*This post is authored by Datavized CTO [Brian Chirls](https://twitter.com/bchirls)*

As a child of the 80s, I consider the original [*Legend of Zelda*](https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)) for the NES one of my favorite pieces of media. Beyond the gameplay and vast explorable world, I've always loved the sound. The way the sound effects layer on the music turn a short, repeated 8-bit loop into a beautiful reflection of the dramatic tension in the gameplay. The release of TwoTone presented an opportunity to remix these sounds and turn it into something practical.

Naturally, I thought of a sonification of Richard Nixon's approval ratings as the perfect fit, for a few reasons. First, audio representation of data lends itself best to data on a timeline, since playback is itself timed by necessity. Second, Nixon had a particularly dramatic administration with a wide enough range of highs and lows to make use of many of the sounds that were used in the game. Finally, having happened in the past, Nixon's presidency is a complete timeline, as opposed to the current President or any prospective candidates.

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/590675403%3Fsecret_token%3Ds-uMWJd&color=%23f57c00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

## The Data

[![Chart: Richard Nixon Approval Ratings 1969-1974](/images/richard-nixon-approval-r.svg)](https://www.presidency.ucsb.edu/statistics/data/presidential-job-approval)

Presidential approval rating data are available from [The American Presidency Project](https://www.presidency.ucsb.edu/statistics/data/presidential-job-approval) at UC Santa Barbara. It's available in a clean [spreadsheet](https://docs.google.com/spreadsheets/d/1iEl565M1mICTubTtoxXMdxzaHzAcPTnb3kpRndsrfyY/edit?ts=5bd7f609#gid=460040875) that can import right into TwoTone but I had to process the data a bit to make it better fit the results I wanted.

1. The polls listed aren't timed evenly, so I had to convert it to a table with one row every week, through the magic of [VLOOKUP](https://support.office.com/en-us/article/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1).
1. Add a column for "Margin" (i.e. approval minus disapproval) to account for uncertainty, and another column to normalize the value from lowest to highest.
1. Add another column for the normalized margin rounded to 10% increments, so we can avoid playing sounds for tiny increments that might represent noise, but without introducing inaccuracies.
1. Add a few more columns for weekly changes between values, so we can trigger sounds on rises and drops.
1. Add an "Investigation Status" column to trigger when the Watergate investigation starts and when it ends with Nixon's resignation.

[Download the spreadsheet](https://drive.google.com/open?id=1xXpasVVyYCzv9zItEyAMsdkJclQ10nuk)

## The Sounds

<figure>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/3Bm6EUfWvQk?start=314" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<figcaption>A sample of the original <em>Legend of Zelda</em> dungeon gameplay.</figcaption>
</figure>

There several [musical themes](https://zeldauniverse.net/media/music/the-legend-of-zelda-original-soundtrack/) in *The Legend of Zelda*, and for this project I chose the "Dungeon" theme. It's dramatic and dark, and it loops nicely to fit whatever lenght I need. The sound effects moslty represent actions the protagonist Link takes like the "sword slash", things that happen to him like a grunt when he gets hurt, or the status of the game like the low health alarm that beeps when Link has only half a "heart container" left and can only take one or two more hits before he dies and the game is over. The goal of this project is to create a piece of audio that sounds like a typical playthrough of the game and also accurately tells the story of Nixon's fall as represented by the data.

I was able to find online samples of individual sound effects from the original game, as well as an isolated music track, so I could map each of these to a data value. Most of the other [example projects](/examples/) use "Scale" tracks that play musical notes on pre-determined a selection of instruments, but here I use ["Narration Audio"](/how-it-works/#narration-audio) tracks that allow me to upload my own sounds. On each track, I applied a [filter](/how-it-works/#filtering-a-track), a simple but powerful feature in TwoTone that allows for complex layering of sounds based on numerical or categorical data.

- **Dungeon theme music** - Looping music that plays throughout the entire range of Nixon's presidency.
- **Sword Slash** - Small increases in approval margin.
- **Get Heart** - Large increases in approval margin.
- **Hurt Grunt** - Decreases in approval margin.
- **Dungeon boss roar** - Repeated during Watergate investigation, representing a looming threat. In the game, this sound plays when Link is in the same or adjacent room to the dungeon boss.
- **Low Health Alarm** - A repeated beeping sound that plays when the player's health gets very low, or when Nixon's disapproval rating is 33 or more points higher than approval.
- **Death flourish** - Music that plays when the player dies or when Nixon resigns.

## The Result

<iframe width="560" height="315" src="https://www.youtube.com/embed/9sYowKM-Ifg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The final composition plays for about a minute and a half and tracks Nixon's approval rating as it starts relatively high and drops through the Watergate scandal and to his final resignation. It sounds like a short piece of real game play (especially for a mediocre player like me who gets killed pretty quickly).

I'm happy with how this piece turned out, but there's room to do even more. There are sounds for other actions like picking up a gem (i.e. money) or a key and enemy attacks and defenses that could potentially be linked (no pun intended) with other data from the time period. If you'd like to try your own version, the original and processed spreadsheets are available, and you can find the various sound effects and musical themes with a quick search online. Or perhaps use a different game paired with data from a different President.

We'd love to hear what you come up with, so find us online [@datavized](https://twitter.com/datavized) and share what you've got.