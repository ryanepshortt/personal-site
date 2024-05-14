import React, { createContext, useMemo, useState, useCallback } from "react";
import _ from "lodash";
import { Players, PositionIdToLabelMap } from "../constants/softball/Softball";

const emptyLineup = {
  pitcher: undefined,
  catcher: undefined,
  shortStop: undefined,
  firstBase: undefined,
  secondBase: undefined,
  thirdBase: undefined,
  leftField: undefined,
  centerField: undefined,
  rightField: undefined,
  rover: undefined,
};

const initialoptions = {
  sitLockedPositions: true,
  shouldSwitchPitcher: false,
  innings: 7,
  games: 2,
};

const initialState = {
  players: { ...Players },
  playerIds: Object.keys(Players),
  lockedPositions: { ...emptyLineup },
  options: { ...initialoptions },
};

const SoftballContext = createContext(initialState);

function SoftballProvider({ children }) {
  const [players, setPlayers] = useState({ ...Players });
  const [lockedPositions, setLockedPositions] = useState({ ...emptyLineup });
  const [options, setOptions] = useState({ ...initialoptions });
  const [fullGameLineup, setFullGameLineup] = useState();

  const onPlayerHasPitchedChange = useCallback((id) => {
    setPlayers((currentPlayers) => ({
      ...currentPlayers,
      [id]: {
        ...currentPlayers[id],
        hasPitched: !currentPlayers[id].hasPitched,
      },
    }));
  }, []);

  const onPlayerHasSatChange = useCallback((id) => {
    setPlayers((currentPlayers) => ({
      ...currentPlayers,
      [id]: {
        ...currentPlayers[id],
        hasSat: !currentPlayers[id].hasSat,
      },
    }));
  }, []);

  const onSitLockedPositionsChange = useCallback(() => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      sitLockedPositions: !currentOptions.sitLockedPositions,
    }));
  }, []);

  const onShouldSwitchPitcherChange = useCallback(() => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      shouldSwitchPitcher: !currentOptions.shouldSwitchPitcher,
    }));
  }, []);

  const onInningsChange = useCallback((e) => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      innings: e.target.value,
    }));
  }, []);

  const onGamesChange = useCallback((e) => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      games: e.target.value,
    }));
  }, []);

  const removePlayerById = (id) => {
    setPlayers((currentPlayers) => {
      const newPlayers = { ...currentPlayers };
      delete newPlayers[id];
      return newPlayers;
    });
    if (fullGameLineup !== undefined) {
      setFullGameLineup(undefined);
    }
  };

  const getLockedPositionById = (id) =>
    Object.keys(lockedPositions).find(
      (position) => lockedPositions[position] === id,
    ) || "any";

  const setLockedPositionForPlayer = (e, id) => {
    const newPosition = e.target.value;
    const currentPosition = getLockedPositionById(id);
    const newPositions = _.cloneDeep(lockedPositions);
    newPositions[currentPosition] = undefined;
    if (newPosition !== "Any") {
      newPositions[newPosition] = id;
    }
    setLockedPositions(newPositions);
  };

  const generateLineup = (playerList, opts, previousLineup) => {
    const { sitLockedPositions, shouldSwitchPitcher } = opts;
    let lineup = _.cloneDeep(emptyLineup);

    const lockedPositionIds = [...Object.values(lockedPositions)].filter(
      (pid) => pid !== undefined,
    );
    const playerListCopy = _.cloneDeep(playerList);
    const availablePlayers = _.cloneDeep(playerList);
    // Pitcher Logic
    if (!shouldSwitchPitcher && previousLineup?.pitcher !== undefined) {
      lineup.pitcher = previousLineup.pitcher;
      delete availablePlayers[lineup.pitcher];
    }
    // Follow logic if we want locked players to always play
    if (!sitLockedPositions) {
      lineup = _.cloneDeep(lockedPositions);
      lockedPositionIds.forEach((pid) => delete availablePlayers[pid]);
    }
    // Bench logic
    const availablePlayerIds = [...Object.keys(availablePlayers)];
    const benchPlayersRequired = availablePlayerIds.length - 10;
    if (benchPlayersRequired > 0) {
      let playersThatHaveNotSat = availablePlayerIds.filter(
        (pid) => !availablePlayers[pid].hasSat,
      );
      const bench =
        benchPlayersRequired >= playersThatHaveNotSat.length
          ? [...playersThatHaveNotSat]
          : [];
      if (benchPlayersRequired >= playersThatHaveNotSat.length) {
        // remove the bench players from available players
        bench.forEach((pid) => {
          delete availablePlayers[pid];
        });
        // rebuild availableBenchPlayers if more are required
        if (benchPlayersRequired > playersThatHaveNotSat.length) {
          playersThatHaveNotSat = [...Object.keys(availablePlayers)];
        }
        Object.keys(playerListCopy).forEach((pid) => {
          playerListCopy[pid].hasSat = false;
        });
      }
      const remainingBenchPlayerNum = benchPlayersRequired - bench.length;
      for (let i = 0; i < remainingBenchPlayerNum; i += 1) {
        const benchPid = _.sample(playersThatHaveNotSat);
        bench.push(benchPid);
        playersThatHaveNotSat.splice(
          playersThatHaveNotSat.indexOf(benchPid),
          1,
        );
        delete availablePlayers[benchPid];
        playerListCopy[benchPid].hasSat = true;
      }
      lineup.bench = bench;
    }

    // Locked Position Logic
    if (sitLockedPositions) {
      lockedPositionIds.forEach((pid) => {
        if (availablePlayers[pid] !== undefined) {
          lineup[getLockedPositionById(pid)] = pid;
          delete availablePlayers[pid];
        }
      });
    }

    // Pitcher Logic For Randomizing Each Inning
    if (lineup.pitcher === undefined) {
      let availablePitchers = [...Object.keys(availablePlayers)].filter(
        (playerId) => !availablePlayers[playerId].hasPitched,
      );
      if (availablePitchers.length === 0) {
        availablePitchers = [...Object.keys(availablePlayers)];
        Object.keys(playerListCopy).forEach((pid) => {
          playerListCopy[pid].hasPitched = false;
        });
      }
      lineup.pitcher = _.sample(availablePitchers);
      delete availablePlayers[lineup.pitcher];
      playerListCopy[lineup.pitcher].hasPitched = true;
    }

    // Catcher Logic
    if (!lockedPositions.catcher) {
      let availableCatchers = [...Object.keys(availablePlayers)].filter(
        (pid) => !availablePlayers[pid].hasCaught,
      );
      if (availableCatchers.length === 0) {
        Object.keys(playerListCopy).forEach((pid) => {
          playerListCopy[pid].hasCaught = false;
        });
        availableCatchers = [...Object.keys(availablePlayers)];
      }
      const catcherId = _.sample(availableCatchers);
      delete availablePlayers[catcherId];
      playerListCopy[catcherId].hasCaught = true;
      lineup.catcher = catcherId;
    }

    // Remaining Randomized Position Logic
    Object.keys(lineup)
      .filter((position) => lineup[position] === undefined)
      .forEach((position) => {
        lineup[position] = _.sample([...Object.keys(availablePlayers)]);
        delete availablePlayers[lineup[position]];
      });

    return [lineup, playerListCopy];
  };

  const generateFullGameLineup = () => {
    const games = [];
    for (let i = 0; i < options.games; i += 1) {
      const lineups = [];
      let trackedPlayers = _.cloneDeep(players);
      let previousLineup;
      for (let j = 0; j < options.innings; j += 1) {
        const [lineup, updatedPlayers] = generateLineup(
          trackedPlayers,
          options,
          previousLineup,
        );
        trackedPlayers = updatedPlayers;
        lineups.push(lineup);
        previousLineup = lineup;
      }
      games.push(lineups);
    }
    setFullGameLineup(games);
  };

  const getPositionFromLineupForPlayer = (lineup, playerId) => {
    return PositionIdToLabelMap[
      Object.keys(lineup).find((positionId) =>
        positionId === "bench"
          ? lineup[positionId].includes(playerId)
          : lineup[positionId] === playerId,
      )
    ];
  };

  const contextValue = useMemo(
    () => ({
      players,
      lockedPositions,
      options,
      playerIds: Object.keys(players),
      fullGameLineup,
      getPlayerById: (id) => players[id],
      onInningsChange,
      onGamesChange,
      onPlayerHasPitchedChange,
      onPlayerHasSatChange,
      onSitLockedPositionsChange,
      onShouldSwitchPitcherChange,
      removePlayerById,
      getLockedPositionById,
      setLockedPositionForPlayer,
      generateFullGameLineup,
      getPositionFromLineupForPlayer,
    }),
    [players, lockedPositions, fullGameLineup, options, generateFullGameLineup],
  );
  return (
    <SoftballContext.Provider value={contextValue}>
      {children}
    </SoftballContext.Provider>
  );
}

export { SoftballProvider };
export default SoftballContext;
