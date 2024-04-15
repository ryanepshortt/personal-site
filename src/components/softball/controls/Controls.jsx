import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./Controls.css";

function Controls() {
  const {
    generateFullGameLineup,
    options,
    onLockedPositionsShouldSitChange,
    onInningsChange,
  } = useContext(SoftballContext);
  return (
    <div>
      <div className="options-section">
        <div className="locked-postion">
          <label htmlFor="locked-position-option">
            Don't sit players with locked positions:{"  "}
            <input
              type="checkbox"
              value={options.lockedPositionsDontSit}
              onChange={onLockedPositionsShouldSitChange}
              id="locked-position-option"
            />
          </label>
        </div>
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
