import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./PlayerList.css";
import { Positions } from "../../../constants/softball/Softball";

function PlayerRow({ playerId, index }) {
  const {
    getPlayerById,
    removePlayerById,
    onPlayerHasPitchedChange,
    onPlayerHasSatChange,
    onPlayerHasCaughtChange,
    getLockedPositionById,
    setLockedPositionForPlayer,
    lockedPositions,
  } = useContext(SoftballContext);
  const { name, hasPitched, hasSat, hasCaught } = getPlayerById(playerId);

  const someoneIsLockedAsPitcher = lockedPositions.pitcher !== undefined;
  return (
    <div className="player-list-row">
      <div className="column-wrapper">
        <div className="player-number">{index}.</div>
      </div>
      <div className="column-wrapper-name">
        <div className="player-name">{name}</div>
      </div>
      <div className="column-wrapper">
        <div className="checkbox-wrapper">
          {!someoneIsLockedAsPitcher && (
            <input
              type="checkbox"
              checked={hasPitched}
              onChange={() => onPlayerHasPitchedChange(playerId)}
              id={`has-pitched-${playerId}`}
            />
          )}
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
      <div className="column-wrapper">
        <div className="select-wrapper">
          <select
            className="position-select"
            value={getLockedPositionById(playerId)}
            onChange={(e) => setLockedPositionForPlayer(e, playerId)}
          >
            <option id="any">Any</option>
            {Positions.map(({ id, label }) => (
              <option key={id} id={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </div>
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
