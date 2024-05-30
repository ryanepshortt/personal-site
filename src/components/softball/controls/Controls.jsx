import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./Controls.css";

function Controls() {
  const {
    generateFullGameLineup,
    options,
    onPitcherInningsChange,
    onInningsChange,
    onGamesChange,
    onShouldReuseCatcherChange,
  } = useContext(SoftballContext);

  return (
    <div>
      <div className="options-section">
        <div className="innings">
          <label htmlFor="innings">
            Innings:{"  "}
            <input
              type="number"
              value={options.innings}
              onChange={onInningsChange}
              id="innings"
            />
          </label>
        </div>
        <div className="innings">
          <label htmlFor="games">
            Games:{"  "}
            <input
              type="number"
              value={options.games}
              onChange={onGamesChange}
              id="games"
            />
          </label>
        </div>
        <div className="innings">
          <label htmlFor="pitcherInnings">
            Innings Per Pitcher:{"  "}
            <input
              type="number"
              value={options.pitcherInnings}
              onChange={onPitcherInningsChange}
              id="pitcherInnings"
            />
          </label>
        </div>
        <div className="innings">
          <label htmlFor="shouldReuseCatcher">
            Should Have A Single Catcher:{"  "}
            <input
              type="checkbox"
              checked={options.shouldReuseCatcher}
              onChange={onShouldReuseCatcherChange}
              id="shouldReuseCatcher"
            />
          </label>
        </div>
      </div>
      <div className="button-section">
        <button
          type="button"
          className="generate-button"
          onClick={generateFullGameLineup}
        >
          Generate Full Game Lineup
        </button>
      </div>
    </div>
  );
}

export default Controls;
