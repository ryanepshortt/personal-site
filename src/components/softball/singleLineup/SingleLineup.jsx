import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";

function SingleLineup() {
  const { singleLineup, getPlayerById } = useContext(SoftballContext);
  return (
    <div>
      {singleLineup !== undefined && (
        <div>
          <div>
            <b>Pitcher:</b> {getPlayerById(singleLineup.pitcher)?.name}
          </div>
          <div>
            <b>Catcher:</b> {getPlayerById(singleLineup.catcher)?.name}
          </div>
          <div>
            <b>First Base:</b> {getPlayerById(singleLineup.firstBase)?.name}
          </div>
          <div>
            <b>Second Base:</b> {getPlayerById(singleLineup.secondBase)?.name}
          </div>
          <div>
            <b>Third Base:</b> {getPlayerById(singleLineup.thirdBase)?.name}
          </div>
          <div>
            <b>Short Stop:</b> {getPlayerById(singleLineup.shortStop)?.name}
          </div>
          <div>
            <b>Left Field:</b> {getPlayerById(singleLineup.leftField)?.name}
          </div>
          <div>
            <b>Center Field:</b> {getPlayerById(singleLineup.centerField)?.name}
          </div>
          <div>
            <b>Right Field:</b> {getPlayerById(singleLineup.rightField)?.name}
          </div>
          <div>
            <b>Rover:</b> {getPlayerById(singleLineup.rover)?.name}
          </div>
          <div>
            <b>Bench:</b>{" "}
            {singleLineup.bench.map(
              (playerId, index) =>
                `${getPlayerById(playerId)?.name || ""}${
                  index + 1 < singleLineup.bench.length ? ", " : ""
                }`,
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleLineup;
