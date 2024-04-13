import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./PlayerList.css";
import { Positions } from "../../../constants/softball/Softball";

function PlayerRow({ playerId, index }) {
  const {
    getPlayerById,
    removePlayerById,
    onPlayerHasPitchedChange,
    getLockedPositionById,
    setLockedPositionForPlayer,
    lockedPositions,
  } = useContext(SoftballContext);
  const { name, hasPitched } = getPlayerById(playerId);

  const someoneIsLockedAsPitcher = lockedPositions.pitcher !== undefined;
  return (
    <div className="player-list-row">
      <div>{index}.</div>
      <div>{name}</div>
      <div>
        {!someoneIsLockedAsPitcher && (
          <label htmlFor={`has-pitched-${playerId}`}>
            Pitched
            <input
              type="checkbox"
              checked={hasPitched}
              onChange={() => onPlayerHasPitchedChange(playerId)}
              id={`has-pitched-${playerId}`}
            />
          </label>
        )}
      </div>
      <select
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
      <div>
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
