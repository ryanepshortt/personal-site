import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./Controls.css";

function Controls() {
  const {
    generateFullGameLineup,
    options,
    onSitLockedPositionsChange,
    onSitPitcherChange,
    onShouldSwitchPitcherChange,
    onInningsChange,
    lockedPositions,
  } = useContext(SoftballContext);

  const lockedPositionExists = Object.keys(lockedPositions).some(
    (pos) => pos !== "pitcher" && lockedPositions[pos] !== undefined,
  );
  return (
    <div>
      <div className="options-section">
        <div className="locked-postion">
          <label htmlFor="should-switch-pitcher">
            Switch randomized pitcher each inning:{"  "}
            <input
              type="checkbox"
              value={options.shouldSwitchPitcher}
              onChange={onShouldSwitchPitcherChange}
              id="should-switch-pitcher"
            />
          </label>
        </div>
        {lockedPositions.pitcher !== undefined && (
          <div className="locked-postion">
            <label htmlFor="should-pitcher-sit">
              Sit the locked pitcher:{"  "}
              <input
                type="checkbox"
                value={options.sitPitcher}
                onChange={onSitPitcherChange}
                id="should-pitcher-sit"
              />
            </label>
          </div>
        )}
        {lockedPositionExists && (
          <div className="locked-postion">
            <label htmlFor="locked-position-option">
              Sit players with locked positions:{"  "}
              <input
                type="checkbox"
                value={options.sitLockedPositions}
                onChange={onSitLockedPositionsChange}
                defaultChecked
                id="locked-position-option"
              />
            </label>
          </div>
        )}
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
