import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import PlayerRow from "./PlayerRow";
import "./PlayerList.css";

function PlayerList() {
  const { playerIds } = useContext(SoftballContext);
  return (
    <div className="list-wrapper">
      <div className="header-row">
        <div />
        <div />
        <div className="column-title">Pitched</div>
        <div className="column-title">Sat</div>
        <div className="column-title-left">Position Lock</div>
        <div />
      </div>
      {playerIds.map((id, index) => (
        <PlayerRow playerId={id} index={index + 1} key={id} />
      ))}
    </div>
  );
}

export default PlayerList;
