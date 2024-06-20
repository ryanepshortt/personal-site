import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./PlayerList.css";
import { POSITIONS } from "../../../constants/softball/Softball";

function PlayerRow({ playerId, index }) {
  const {
    getPlayerById,
    removePlayerById,
    onPlayerHasPitchedChange,
    onPlayerHasSatChange,
    onPlayerHasCaughtChange,
    onTogglePlayerEligiblePositions,
    onPlayerNameChange,
  } = useContext(SoftballContext);
  const { name, hasPitched, hasSat, hasCaught, eligiblePositions } =
    getPlayerById(playerId);

  return (
    <div className="player-list-row">
      <div className="column-wrapper">
        <div className="player-number">{index}.</div>
      </div>
      <div className="column-wrapper-name">
        <input
          className="player-name-input"
          type="text"
          value={name}
          onChange={(e) => onPlayerNameChange(playerId, e)}
        />
      </div>
      <div className="column-wrapper">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={hasPitched}
            onChange={() => onPlayerHasPitchedChange(playerId)}
            id={`has-pitched-${playerId}`}
          />
        </div>
      </div>
      <div className="column-wrapper">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={hasSat}
            onChange={() => onPlayerHasSatChange(playerId)}
            id={`has-sat-${playerId}`}
          />
        </div>
      </div>
      <div className="column-wrapper">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={hasCaught}
            onChange={() => onPlayerHasCaughtChange(playerId)}
            id={`has-caught-${playerId}`}
          />
        </div>
      </div>
      <div className="column-wrapper positions-wrapper">
        <button
          type="button"
          className={`positionButton ${
            eligiblePositions[POSITIONS.pitcher]
              ? "eligiblePosition"
              : "ineligiblePosition"
          }`}
          onClick={() =>
            onTogglePlayerEligiblePositions(playerId, POSITIONS.pitcher)
          }
        >
          P
        </button>
        <button
          type="button"
          className={`positionButton ${
            eligiblePositions[POSITIONS.catcher]
              ? "eligiblePosition"
              : "ineligiblePosition"
          }`}
          onClick={() =>
            onTogglePlayerEligiblePositions(playerId, POSITIONS.catcher)
          }
        >
          C
        </button>
        <button
          type="button"
          className={`positionButton ${
            eligiblePositions[POSITIONS.firstBase]
              ? "eligiblePosition"
              : "ineligiblePosition"
          }`}
          onClick={() =>
            onTogglePlayerEligiblePositions(playerId, POSITIONS.firstBase)
          }
        >
          1
        </button>
        <button
          type="button"
          className={`positionButton ${
            eligiblePositions[POSITIONS.secondBase]
              ? "eligiblePosition"
              : "ineligiblePosition"
          }`}
          onClick={() =>
            onTogglePlayerEligiblePositions(playerId, POSITIONS.secondBase)
          }
        >
          2
        </button>
        <button
          type="button"
          className={`positionButton ${
            eligiblePositions[POSITIONS.thirdBase]
              ? "eligiblePosition"
              : "ineligiblePosition"
          }`}
          onClick={() =>
            onTogglePlayerEligiblePositions(playerId, POSITIONS.thirdBase)
          }
        >
          3
        </button>
        <button
          type="button"
          className={`positionButton ${
            eligiblePositions[POSITIONS.shortStop]
              ? "eligiblePosition"
              : "ineligiblePosition"
          }`}
          onClick={() =>
            onTogglePlayerEligiblePositions(playerId, POSITIONS.shortStop)
          }
        >
          S
        </button>
        <button
          type="button"
          className={`positionButton ${
            eligiblePositions[POSITIONS.outfield]
              ? "eligiblePosition"
              : "ineligiblePosition"
          }`}
          onClick={() =>
            onTogglePlayerEligiblePositions(playerId, POSITIONS.outfield)
          }
        >
          O
        </button>
      </div>
      <div className="column-wrapper">
        <button
          className="remove-button"
          type="button"
          onClick={() => removePlayerById(playerId)}
        >
          <div className="button-text">-</div>
        </button>
      </div>
    </div>
  );
}

export default PlayerRow;
