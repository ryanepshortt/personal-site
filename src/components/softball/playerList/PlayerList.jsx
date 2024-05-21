import React, { useContext, useState } from "react";
import SoftballContext from "../../../contexts/Softball";
import PlayerRow from "./PlayerRow";
import "./PlayerList.css";

function PlayerList() {
  const { playerIds, flipAllFields } = useContext(SoftballContext);
  const [pitchedFlip, setPitchedFlip] = useState(true);
  const onPitchClick = () => {
    flipAllFields("hasPitched", pitchedFlip);
    setPitchedFlip(!pitchedFlip);
  };
  const [satFlip, setSatFlip] = useState(true);
  const onSatFlip = () => {
    flipAllFields("hasSat", satFlip);
    setSatFlip(!satFlip);
  };
  const [caughtFlip, setCaughtFlip] = useState(true);
  const onCaughtFlip = () => {
    flipAllFields("hasCaught", caughtFlip);
    setCaughtFlip(!caughtFlip);
  };
  return (
    <div className="list-wrapper">
      <div className="header-row">
        <div />
        <div />
        <div className="column-title" onClick={onPitchClick}>
          Pitched
        </div>
        <div className="column-title" onClick={onSatFlip}>
          Sat
        </div>
        <div className="column-title" onClick={onCaughtFlip}>
          Caught
        </div>
        <div className="column-title-left">Eligible Positions</div>
        <div />
      </div>
      {playerIds.map((id, index) => (
        <PlayerRow playerId={id} index={index + 1} key={id} />
      ))}
    </div>
  );
}

export default PlayerList;
