---
layout: article
title: Getting Started with TwoTone
date: 2019-01-23 21:34:40 +0000
modified: 2019-01-23 21:34:40 +0000
excerpt:
tags: []
image:
  feature:
  teaser:
  thumb:
share: false

---

You can use [app.twotone.io](//app.twotone.io "app.twotone.io") + or view the source code on [github](https://github.com/datavized/twotone "TwoTone").

{% include toc.html %}

## Getting Started

Follow these simple steps to get started with TwoTone.

1. **Audio Track** - TwoTone will automatically generate an audio track from your data set. You can change your track's data source or instrument.
2. **Play Audio** - Click the Play button to hear the sound generated from your data.
3. **Speak Title** - Enter a Title to automatically generate text-to-speech, toggle to turn speech on or off. Customize settings for language, gender and voice options.
4. **Add Audio Track** - Generate another audio track automatically from your data set or upload an audio track of your own.
5. **Adjust Duration** - Adjust your total duration, row duration, and tempo (BPM) to speed up or slow down your composition.
6. **Advanced Features** - Adjust the volume of your audio track, filter it by data columns or by value, change the key of your musical scale, or adjust octave, scale range and tempo to create an arpeggio.
7. **Export Audio** - Export your project to an audio file in MP3 or Waveform (PCM) format. MP3 Bit Rate export options are 64 kbps, 128 kbps,, 192 kbps, and 320 kbps.

There is also a guided tour built into the web app.

## Feature Documentation

### Creating a Track

A TwoTone composition can have any number of separate tracks, each emitting a different audio representation of one column of data. A new track can be created by hovering or clicking on the "+" button in the lower right corner and selecting a track type. Currently, TwoTone supports two types of tracks:

- **Musical Scale** - Generates a sequence of notes with a pitch corresponding to the data value.

- **Narration Audio** - Plays a recorded or imported audio track, optionally on a loop.

### Editing a Track

All tracks have a few options and operations in common, regardless of their type. Some advanced options are available in the expanded track view, which can be revealed by clicking the expand button at the top right of the track.

#### Re-Order Tracks

Tracks are initially listed in the order they are created. They can be re-sorted by dragging a track's handle on the right side.

#### Delete a Track

A track can be deleted by clicking the trash can icon in the upper right corner of the track frame. There is a confirmation, but track deletion is permanent.

#### Mute a Track

A track can be muted or un-muted by toggling the speaker button in the upper right corner of the track.

#### Volume Adjustment

Every track has a volume slider in the expanded view.

#### Filtering a Track

Any track can be filtered to play or not based on data values. This is a powerful feature that can allow for complex layering of sounds, instruments and rhythms when combined across multiple tracks. See [tutorials](https://twotone.io/tutorials/) for more information and examples.

Filter controls are in the expanded track view. First, select a data column to use as the values to be filtered. Next, use the slider to select a range of values to be played. The values will be displayed in a bar chart to show which sections of the track will be played and which will be silent.

### Advanced Track Controls

Each type of track has different advanced options that can be used to create complex compositions.

#### Narration Audio

This type of track can be used to add narration or background music to a project.

##### Select an Audio File

Click the prompt to select an audio file to be played. Audio files can be imported from device storage or recorded directly from the device's microphone, if one is available.

##### Play Mode

Select an option to determine when and how often the selected audio clip will be played

- **Loop** - The clip will loop on repeat for the duration of the project (assuming the clip is shorter than the project duration). If a filter is applied, the audio will maintain timing with the project's play time, even through silent sections. This is useful for synchronizing music sections without losing the rhythm.

- **Active sections** - When a filter is applied, the clip will play once at the beginning of each non-silent section.

#### Musical Scale

Musical scale tracks create melodies from data and have many options to customize pitch, rhythms and instruments

##### Data Source

Select a column from the source spreadsheet to provide the values that will determine the pitch of each note. Pitches will be spread across a range of octaves, with the lowest value playing the lowest note and the highest value playing the highest note.

##### Select Instrument

A number of built-in musical instruments are provided.

##### Key

Select tonic or root note and the mode of the musical key. All notes in this track will be played in the given key. In most cases, all tracks should be in the same key, though it's not strictly required.

The lowest and highest values will play the tonic note at either end of the given scale.

##### Scale Range

Select how many octaves will comprise the range of notes from lowest to highest. More octaves will result in finer-grained distinction between values. Fewer octaves will allow different tracks to represent different data at opposing ends of the scale, even using the same instrument, like playing left hand and right hand on a piano.

Each instrument will have a different maximum range of octaves depending on how high and low that instrument can play.

##### Start Octave

The entire scale range can be shifted higher or lower within the range of the instrument's available scale. The default *Auto* setting will place the selected scale range in the middle of the instrument's scale.

##### Track Tempo

TwoTone plays one row of data per "beat" as specified in the global project duration setting. For example, a spreadsheet with 100 rows set at 60bpm will play one note for each row every second for 100 seconds, or one minute and 20 seconds (1:20).

The Track Tempo setting is a multiplier of the global tempo that will play more than one note per row for that track, allowing for more complex rhythms.

##### Arpeggio

When multiple notes are played per row, this allows for an [arpeggio](https://en.wikipedia.org/wiki/Arpeggio) of notes. The root of the arpeggio will be the note determined by the value for that row, and all notes will be in the given key.

- **None** - Repeat the same note
- **Ascending** - Notes will be played in order of increasing pitch
- **Descending** - Notes will be played in order of increasing pitch


This setting is only available when Track Tempo is set to more than 1.

## Frequently Asked Questions

### What devices does TwoTone run on?

If you want to export your music using an Apple device, please use a Desktop or Laptop computer. TwoTone works on mobile on Android. Due to restrictions with Safari, iOS users can make and listen to their compositions but can't export them to their device. If this changes in the future we will enable the feature.

### What kind of data can I use?

TwoTone will accept spreadsheet files up to 20MB in size and 2,000 rows of data. Formats supported are: .xls, .xlsx, .csv, .ods. Drag and drop files into the browser window. Remember that your output will only be as good as your input, so please take time to check your spreadsheet for errors or unnecessary text fields. Also make sure that you are uploading an actual spreadsheet and not a PDF since a PDF will not be readable.

### Does TwoTone store my data?

The data uploaded to TwoTone is processed fully in the web browser: no server-side operations or storage is performed.

### Where do I find data online?

Organizations like the United Nations have a lot of publicly available data as well as most large cities: for example, try the the [NYC Open Data portal](https://opendata.cityofnewyork.us/data/). You can search these listings, and if you find something you like make sure the size works or edit it down if needed.

TwoTone also has some sample data sets built in to help get you started.

### How can your organization benefit from using TwoTone?

TwoTone is designed to be seamlessly integrated into the workflow of a newsroom and used either as a standalone tool for publishing sonification on the web or as a soundtrack builder for multimedia projects. The tool is customizable to enable creators to map any data input to the desired audio output.

### How does Text-to-Speech work?

Twotone uses Google’s Text-To-Speech API so that a creator can type a title for their piece and have it read in a male or female voice in different languages. This audio is placed before the music starts to give context to the listener. You can turn it on or off. Technically, this means that Twotone can’t really be described purely as 'sonification' since that word refers to "the use of non-speech audio to convey information or perceptualize data".

## Feedback

Have a question, issue with the app or feedback to help make TwoTone better?
- Submit our [feedback form](https://docs.google.com/forms/d/1FUTwQ8fe15BTsSyOy3roWhKgWgN7c1I4dTzJR3ZBTu4/edit)
- File an [issue on GitHub](https://github.com/datavized/twotone/issues)
- or email us at [contact@datavized.com](mailto:contact@datavized.com)
