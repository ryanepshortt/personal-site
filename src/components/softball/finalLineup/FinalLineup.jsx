import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";

function FinalLineup() {
  const { generateLineup, finalLineup, getPlayerById } =
    useContext(SoftballContext);
  return (
    <div>
      <button type="button" onClick={generateLineup}>
        Generate Lineup
      </button>
      {finalLineup !== undefined && (
        <div>
          <div>Pitcher: {getPlayerById(finalLineup.pitcher)?.name}</div>
          <div>Catcher: {getPlayerById(finalLineup.catcher)?.name}</div>
          <div>First Base: {getPlayerById(finalLineup.firstBase)?.name}</div>
          <div>Second Base: {getPlayerById(finalLineup.secondBase)?.name}</div>
          <div>Third Base: {getPlayerById(finalLineup.thirdBase)?.name}</div>
          <div>Short Stop: {getPlayerById(finalLineup.shortStop)?.name}</div>
          <div>Left Field: {getPlayerById(finalLineup.leftField)?.name}</div>
          <div>
            Center Field: {getPlayerById(finalLineup.centerField)?.name}
          </div>
          <div>Right Field: {getPlayerById(finalLineup.rightField)?.name}</div>
          <div>Rover: {getPlayerById(finalLineup.rover)?.name}</div>
          <div>
            Bench:{" "}
            {finalLineup.bench.map(
              (playerId, index) =>
                `${getPlayerById(playerId).name}${
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
