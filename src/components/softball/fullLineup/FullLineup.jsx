import React, { useContext } from "react";
import SoftballContext from "../../../contexts/Softball";
import "./FullLineup.css";

function nth(n) {
  return `${n}${
    ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th"
  }`;
}

function FullLineup() {
  const { fullGameLineup, getPlayerById } = useContext(SoftballContext);
  if (fullGameLineup === undefined) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          <th scope="col" />
          {fullGameLineup.map((lineup, index) => (
            <th key={JSON.stringify(lineup)} scope="col">
              {nth(index + 1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Pitcher</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.pitcher).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Catcher</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.catcher).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">1st Base</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.firstBase).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">2nd Base</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.secondBase).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">3rd Base</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.thirdBase).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Short Stop</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.shortStop).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Left Field</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.leftField).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Center Field</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.centerField).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Right Field</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.rightField).firstName}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Rover</th>
          {fullGameLineup.map((lineup) => (
            <td key={JSON.stringify(lineup)}>
              {getPlayerById(lineup.rover).firstName}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default FullLineup;
