import { v4 } from "uuid";

export const Players = {
  [v4()]: {
    name: "Blake Shaw",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Bryson Ahlstedt",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Carter Brooks",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Jack Vautour",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Jason MacPhearson",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "John Stewart",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Matthew Shortt",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Michael Boyd",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Ostop Mostowy",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Phil Pavilic",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Ronan Weir",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Ryan Shortt",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Spencer Dobbs",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Tyler Verbanac",
    hasPitched: false,
    hasSat: false,
  },
  [v4()]: {
    name: "Zach Cowan",
    hasPitched: false,
    hasSat: false,
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
