import { v4 } from "uuid";

export const Players = {
  [v4()]: {
    name: "Blake Shaw",
    hasPitched: false,
  },
  [v4()]: {
    name: "Bryson Ahlstedt",
    hasPitched: false,
  },
  [v4()]: {
    name: "Carter Brooks",
    hasPitched: false,
  },
  [v4()]: {
    name: "Jack Vautour",
    hasPitched: false,
  },
  [v4()]: {
    name: "Jason MacPhearson",
    hasPitched: false,
  },
  [v4()]: {
    name: "John Stewart",
    hasPitched: false,
  },
  [v4()]: {
    name: "Matthew Shortt",
    hasPitched: false,
  },
  [v4()]: {
    name: "Michael Boyd",
    hasPitched: false,
  },
  [v4()]: {
    name: "Ostop Mostowy",
    hasPitched: false,
  },
  [v4()]: {
    name: "Phil Pavilic",
    hasPitched: false,
  },
  [v4()]: {
    name: "Ronan Weir",
    hasPitched: false,
  },
  [v4()]: {
    name: "Ryan Shortt",
    hasPitched: false,
  },
  [v4()]: {
    name: "Spencer Dobbs",
    hasPitched: false,
  },
  [v4()]: {
    name: "Tyler Verbanac",
    hasPitched: false,
  },
  [v4()]: {
    name: "Zach Cowan",
    hasPitched: false,
  },
};

export const Positions = [
  { label: "Pitcher", id: "pitcher" },
  { label: "Catcher", id: "catcher" },
  { label: "Short Stop", id: "shortStop" },
  { label: "First Base", id: "firstBase" },
  { label: "Second Base", id: "secondBase" },
  { label: "Third Base", id: "thirdBase" },
  { label: "Left Field", id: "leftField" },
  { label: "Center Field", id: "centerField" },
  { label: "Right Field", id: "rightField" },
  { label: "Rover", id: "rover" },
];
