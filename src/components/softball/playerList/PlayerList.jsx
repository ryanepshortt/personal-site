import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import PlayerRow from "./PlayerRow";
import "./PlayerList.css";

function PlayerList() {
  const { playerIds } = useContext(SoftballContext);
  return (
    <div className="list-wrapper">
      {playerIds.map((id, index) => (
        <PlayerRow playerId={id} index={index + 1} key={id} />
      ))}
    </div>
  );
}

export default PlayerList;
