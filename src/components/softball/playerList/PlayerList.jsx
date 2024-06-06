import React, { useContext, useState } from "react";
import SoftballContext from "../../../contexts/Softball";
import PlayerRow from "./PlayerRow";
import "./PlayerList.css";
import { POSITIONS } from "../../../constants/softball/Softball";

function PlayerList() {
  const { playerIds, flipAllFields, flipAllEligiblePositions } =
    useContext(SoftballContext);
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

  const onPitcherFlip = () => {
    flipAllEligiblePositions(POSITIONS.pitcher);
  };
  const onCatcherFlip = () => {
    flipAllEligiblePositions(POSITIONS.catcher);
  };
  const onFirstFlip = () => {
    flipAllEligiblePositions(POSITIONS.firstBase);
  };
  const onSecondFlip = () => {
    flipAllEligiblePositions(POSITIONS.secondBase);
  };
  const onThirdFlip = () => {
    flipAllEligiblePositions(POSITIONS.thirdBase);
  };
  const onSsFlip = () => {
    flipAllEligiblePositions(POSITIONS.shortStop);
  };
  const onOFlip = () => {
    flipAllEligiblePositions(POSITIONS.outfield);
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
        <div className="positions-wrapper-header">
          <button
            type="button"
            className="positionButton eligiblePosition"
            onClick={onPitcherFlip}
          >
            P
          </button>
          <button
            type="button"
            className="positionButton eligiblePosition"
            onClick={onCatcherFlip}
          >
            C
          </button>
          <button
            type="button"
            className="positionButton eligiblePosition"
            onClick={onFirstFlip}
          >
            1
          </button>
          <button
            type="button"
            className="positionButton eligiblePosition"
            onClick={onSecondFlip}
          >
            2
          </button>
          <button
            type="button"
            className="positionButton eligiblePosition"
            onClick={onThirdFlip}
          >
            3
          </button>
          <button
            type="button"
            className="positionButton eligiblePosition"
            onClick={onSsFlip}
          >
            S
          </button>
          <button
            type="button"
            className="positionButton eligiblePosition"
            onClick={onOFlip}
          >
            O
          </button>
        </div>
        <div />
      </div>
      {playerIds.map((id, index) => (
        <PlayerRow playerId={id} index={index + 1} key={id} />
      ))}
    </div>
  );
}

export default PlayerList;
