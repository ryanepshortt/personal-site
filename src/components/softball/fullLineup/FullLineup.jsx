import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import { getFirstName } from "../../../contexts/SoftballUtils";
import "./FullLineup.css";

function nth(n) {
  return `${n}${
    ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th"
  }`;
}

function FullLineup() {
  const {
    fullGameLineup,
    getPlayerById,
    players,
    getPositionFromLineupForPlayer,
  } = useContext(SoftballContext);
  if (fullGameLineup === undefined) {
    return null;
  }
  return fullGameLineup.map((game, gameNum) => (
    <div key={JSON.stringify(game)} className="table-wrapper">
      <div className="title">Game {gameNum + 1}</div>
      <table>
        <thead>
          <tr>
            <th scope="col" className="first-column">
              Team
            </th>
            {game.map((lineup, index) => (
              <th key={JSON.stringify(lineup)} scope="col">
                {nth(index + 1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="first-column">
              Pitcher
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.pitcher))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              Catcher
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.catcher))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              1st Base
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.firstBase))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              2nd Base
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.secondBase))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              3rd Base
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.thirdBase))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              Short Stop
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.shortStop))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              Outfield
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.outfield1))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              Outfield
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.outfield2))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              Outfield
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.outfield3))}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="first-column">
              Outfield
            </th>
            {game.map((lineup) => (
              <td key={JSON.stringify(lineup)}>
                {getFirstName(getPlayerById(lineup.outfield4))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <table style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th scope="col" className="first-column">
              Player
            </th>
            {game.map((lineup, index) => (
              <th key={JSON.stringify(lineup)} scope="col">
                {nth(index + 1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(players).map((playerId) => {
            const player = getPlayerById(playerId);
            return (
              <tr key={playerId}>
                <th scope="row" className="first-column">
                  {getFirstName(player)}{" "}
                  <span className="jersey-num">{player.jerseyNum}</span>
                </th>
                {game.map((lineup) => (
                  <td key={JSON.stringify(lineup)}>
                    {getPositionFromLineupForPlayer(lineup, playerId)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ));
}

export default FullLineup;
