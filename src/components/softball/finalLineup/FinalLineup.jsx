import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./FinalLineup.css";

function FinalLineup() {
  const { generateLineup, finalLineup, getPlayerById, clearLineup } =
    useContext(SoftballContext);
  return (
    <div>
      <div className="button-section">
        <button
          type="button"
          className="generate-button"
          onClick={generateLineup}
        >
          Generate Lineup
        </button>
        <button type="button" className="clear-button" onClick={clearLineup}>
          Clear Lineup
        </button>
      </div>
      {finalLineup !== undefined && (
        <div>
          <div>
            <b>Pitcher:</b> {getPlayerById(finalLineup.pitcher)?.name}
          </div>
          <div>
            <b>Catcher:</b> {getPlayerById(finalLineup.catcher)?.name}
          </div>
          <div>
            <b>First Base:</b> {getPlayerById(finalLineup.firstBase)?.name}
          </div>
          <div>
            <b>Second Base:</b> {getPlayerById(finalLineup.secondBase)?.name}
          </div>
          <div>
            <b>Third Base:</b> {getPlayerById(finalLineup.thirdBase)?.name}
          </div>
          <div>
            <b>Short Stop:</b> {getPlayerById(finalLineup.shortStop)?.name}
          </div>
          <div>
            <b>Left Field:</b> {getPlayerById(finalLineup.leftField)?.name}
          </div>
          <div>
            <b>Center Field:</b> {getPlayerById(finalLineup.centerField)?.name}
          </div>
          <div>
            <b>Right Field:</b> {getPlayerById(finalLineup.rightField)?.name}
          </div>
          <div>
            <b>Rover:</b> {getPlayerById(finalLineup.rover)?.name}
          </div>
          <div>
            <b>Bench:</b>{" "}
            {finalLineup.bench.map(
              (playerId, index) =>
                `${getPlayerById(playerId)?.name || ""}${
                  index + 1 < finalLineup.bench.length ? ", " : ""
                }`,
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FinalLineup;