import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./PlayerList.css";

function PlayerRow({ playerId, index }) {
  const {
    // onPlayerNameInput,
    getPlayerById,
    removePlayerById,
    onPlayerHasPitchedChange,
  } = useContext(SoftballContext);
  const { name, hasPitched } = getPlayerById(playerId);
  return (
    <div className="player-list-row">
      <div>
        <button
          className="remove-button"
          type="button"
          onClick={() => removePlayerById(playerId)}
        >
          -
        </button>
      </div>
      <div>{index}.</div>
      <div>{name}</div>
      {/* <input value={name} onChange={(e) => onPlayerNameInput(e, playerId)} /> */}
      <div>
        <label htmlFor={`has-pitched-${playerId}`}>
          Has Pitched
          <input
            type="checkbox"
            checked={hasPitched}
            onChange={() => onPlayerHasPitchedChange(playerId)}
            id={`has-pitched-${playerId}`}
          />
        </label>
      </div>
    </div>
  );
}

export default PlayerRow;
