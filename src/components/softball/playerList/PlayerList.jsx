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
  const [pitcherFlip, setPitcherFlip] = useState(false);
  const onPitcherFlip = () => {
    flipAllEligiblePositions(POSITIONS.pitcher, pitcherFlip);
    setPitcherFlip(!pitcherFlip);
  };
  const [catcherFlip, setCatcherFlip] = useState(false);
  const onCatcherFlip = () => {
    flipAllEligiblePositions(POSITIONS.catcher, catcherFlip);
    setCatcherFlip(!catcherFlip);
  };
  const [firstFlip, setFirstFlip] = useState(false);
  const onFirstFlip = () => {
    flipAllEligiblePositions(POSITIONS.firstBase, firstFlip);
    setFirstFlip(!firstFlip);
  };
  const [secondFlip, setSecondFlip] = useState(false);
  const onSecondFlip = () => {
    flipAllEligiblePositions(POSITIONS.secondBase, secondFlip);
    setSecondFlip(!secondFlip);
  };
  const [thirdFlip, setThirdFlip] = useState(false);
  const onThirdFlip = () => {
    flipAllEligiblePositions(POSITIONS.thirdBase, thirdFlip);
    setThirdFlip(!thirdFlip);
  };
  const [ssFlip, setSsFlip] = useState(false);
  const onSsFlip = () => {
    flipAllEligiblePositions(POSITIONS.shortStop, ssFlip);
    setSsFlip(!ssFlip);
  };
  const [oFlip, setOFlip] = useState(false);
  const onOFlip = () => {
    flipAllEligiblePositions(POSITIONS.outfield, oFlip);
    setOFlip(!oFlip);
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
            className={`positionButton ${
              pitcherFlip ? "ineligiblePosition" : "eligiblePosition"
            }`}
            onClick={onPitcherFlip}
          >
            P
          </button>
          <button
            type="button"
            className={`positionButton ${
              catcherFlip ? "ineligiblePosition" : "eligiblePosition"
            }`}
            onClick={onCatcherFlip}
          >
            C
          </button>
          <button
            type="button"
            className={`positionButton ${
              firstFlip ? "ineligiblePosition" : "eligiblePosition"
            }`}
            onClick={onFirstFlip}
          >
            1
          </button>
          <button
            type="button"
            className={`positionButton ${
              secondFlip ? "ineligiblePosition" : "eligiblePosition"
            }`}
            onClick={onSecondFlip}
          >
            2
          </button>
          <button
            type="button"
            className={`positionButton ${
              thirdFlip ? "ineligiblePosition" : "eligiblePosition"
            }`}
            onClick={onThirdFlip}
          >
            3
          </button>
          <button
            type="button"
            className={`positionButton ${
              ssFlip ? "ineligiblePosition" : "eligiblePosition"
            }`}
            onClick={onSsFlip}
          >
            S
          </button>
          <button
            type="button"
            className={`positionButton ${
              oFlip ? "ineligiblePosition" : "eligiblePosition"
            }`}
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
