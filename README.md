# EQ Cubes
---
## Project outline
EQ Cubes is a proof of concept for a Resolume project, coded in ThreeJS.  The aim is to create (without sounding too predictable) shapes that dance to music, such that (for example) each individual shape responds to a particular frequency, in effect, an artistic eq readout. This would require that an audio file be analysed whilst playing - quite likely in a lookahead fashion - by performing a fast fourier transform, and decomposing the waveform into its constituent pure frequencies.

---

## TODOs

### cube.html
> [X] &nbsp; Create original cube.
> [X] &nbsp; Rotate the cube.
> [X] &nbsp; Give it an orbit.
> [X] &nbsp; Apply 'Simple Harmonic Oscillation' to the cube.
> [X] &nbsp; Apply 'Damped Harmonic Oscillation' to the cube.

### cubes.html

#### Basics...
> [X] &nbsp; Create a 2D array/grid of cubes (in 'cubes.html').
> [X] &nbsp; Add a default audio file, ie autoplay.
> [X] &nbsp; Apply rotation to the cubes.
> [ ] &nbsp; Give orbits to the cubes.
> [X] &nbsp; Add 'stats.js' to cubes.html.
> [X] &nbsp; Add 'dat.GUI' to cubes.html.

#### Oscillation code...
> [ ] &nbsp; Implement SHM.
> [ ] &nbsp; Implement DHM.

#### Manual controls...
##### Appearance:
> [ ] &nbsp; Background colour adjustment.
> [ ] &nbsp; Cube colour.
> [ ] &nbsp; Cube material.
> [ ] &nbsp; Background visual effects (TBA).
##### Rotation:
> [ ] &nbsp; Start.
> [ ] &nbsp; Stop.
> [ ] &nbsp; Common rotation factor adjustment.
> [ ] &nbsp; Modes:
> ``` ```[ ] &nbsp; 1. Universal speed.
> ``` ```[ ] &nbsp; 2. Relative to pitch.
> ``` ```[ ] &nbsp; 3. Relative to volume (responsive/dynamic).
> [ ] &nbsp; Test trigger for dynamic mode.
##### Orbits:
> [ ] &nbsp; Start.
> [ ] &nbsp; Stop.
> [ ] &nbsp; Common orbital factor.
> [ ] &nbsp; Period modes:
> ``` ``` [ ] &nbsp; 1. Universal speed.
> ``` ``` [ ] &nbsp; 2. Relative to pitch.
> ``` ``` [ ] &nbsp; 3. Relative to volume (triggered/dynamic).
> [ ] &nbsp; Radius modes:
> ``` ``` [ ] &nbsp; 1. Universal radius.
> ``` ``` [ ] &nbsp; 2. Relative to pitch.
> ``` ``` [ ] &nbsp; 3. Relative to volume (triggered/dynamic).
> [ ] &nbsp; Test trigger for dynamic mode.
##### Oscillation:
> ***Common***
> [ ] &nbsp; Maximum amplitude.
> [ ] &nbsp; Common frequency factor.
> [ ] &nbsp; Amplitude modes:
> ``` ``` [ ] &nbsp; 1. Universal amplitude.
> ``` ``` [ ] &nbsp; 2. Relative to volume (triggered/dynamic).
> **Simple Harmonic Motion**
> [ ] &nbsp; Start.
> [ ] &nbsp; Stop.
> [ ] &nbsp; Amplitude modes:
> ``` ``` [ ] &nbsp; 1. Universal amplitude.
> ``` ``` [ ] &nbsp; 2. Relative to volume (triggered/dynamic).
> [ ] &nbsp; Frequency modes:
> ``` ``` [ ] &nbsp; 1. Universal frequency.
> ``` ``` [ ] &nbsp; 2. Relative to pitch.
> [ ] &nbsp; Test trigger for dynamic mode.
> **Damped Harmonic Motion**
> [ ] &nbsp; Start.
> [ ] &nbsp; Damping factor constant, or range (constraint to keep from over- or under-damping).
> [ ] &nbsp; Amplitude modes:
> ``` ``` [ ] &nbsp; 1. Universal amplitude.
> ``` ``` [ ] &nbsp; 2. Relative to volume (triggered/dynamic).
> [ ] &nbsp; Frequency modes:
> ``` ``` [ ] &nbsp; 1. Universal frequency.
> ``` ``` [ ] &nbsp; 2. Relative to pitch.
> [ ] &nbsp; Damping factor modes:
> ``` ``` [ ] &nbsp; 1. Universal damping factor.
> ``` ``` [ ] &nbsp; 2. Relative to volume, or perhaps attack/sustain/release/decay (responsive/dynamic).
> [ ] &nbsp; Test trigger for dynamic mode.
> **Jumping**
> [ ] &nbsp; Start.
> [ ] &nbsp; Glide factor.
> [ ] &nbsp; Frequency factor (a fraction of frequency).
> [ ] &nbsp; Bounce modes:
> ``` ``` [ ] &nbsp; 1. Bouncing.
> ``` ``` [ ] &nbsp; 2. Parabolic single jump.
> ``` ``` [ ] &nbsp; 3. Gliding single jump.
> [ ] &nbsp; Test trigger for dynamic mode.

#### Camera...
> [X] &nbsp; Apply dat.GUI to offer basic camera movement.
> [ ] &nbsp; Allow the user to change viewing position using the mouse and no more than one key at a time.


#### Audio...
##### File:
> [ ] &nbsp; Embed default audio file.
> [ ] &nbsp; Allow user to select and load audio file of their choice - using the file API.
> [ ] &nbsp; Create a modal window to hold the form and facilitate this.
##### Analysis:
(TODO...)

---

## Roadmap



---

## Libraries/APIs
- [ThreeJS - MrDoob's famous WebGL library](https://threejs.org/)
- [jQuery](https://jquery.com/)
- [dat.GUI - JavaScript controls for variable manipulation](https://github.com/dataarts/dat.gui)
- [StatsJS - WebGL performance analyser and display, built by MrDoob himself!](https://github.com/mrdoob/stats.js/)
- [The JavaScript File API]()
- [The Web Audio API]()

---

## References
[I used a modal window tutorial that can be found here](http://www.jacklmoore.com/notes/jquery-modal-tutorial/)
[dat.GUI offered the what's and how's of its usage here](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage)
[The target of this link assisted me in loading files locally to the browser without uploading to the server](https://scotch.io/tutorials/use-the-html5-file-api-to-work-with-files-locally-in-the-browser)
---

## Tools
The tools and libraries used in this project were:
 - [Dillinger - a killer online Markdown editor](http://dillinger.io/)
 - [Atom IDE - halfway between a text editor and a fully-fledged IDE... currently my favourite coding tool](https://atom.io/)
 - [Iconverter]() (Which one?!)
 - [GitHub (of course!)](https://github.com/)
