# About Vex

Vex is a Screeps AI loosley modelled after the logic/military structure of the [Vex](https://www.destinypedia.com/Vex) from Destiny lore. The AI is written in Typescript and built from the [Screeps Typescript Starter](https://github.com/screepers/screeps-typescript-starter) skeleton.

# Structural Overview

## Basic Vex Objects

- **Vex**: Wrapper for Creeps, provides functionality for AxisMind interactions.
- **Construct**: Groups structures (and rooms) with related functionality/purpose. Can themselves contain Constructs.
- **AxisMind**: Distributes Directives and provides resources to Vex, Constructs or other AxisMinds based on their needs (i.e, spawning more Vex to assist in completeing an assigned Directive).
- **Directive**: Contains the logic to complete a desired task. Used by AxisMinds to direct their aggregate object(s). Can themselves contain Directives.
