import React, { createContext, useMemo, useState, useCallback } from "react";
import _ from "lodash";
import { Players } from "../constants/softball/Softball";

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
  lockedPositionsDontSit: false,
  innings: 7,
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
  const [singleLineup, setSingleLineup] = useState();
  const [options, setOptions] = useState({ ...initialoptions });
  const [fullGameLineup, setFullGameLineup] = useState();

  const onPlayerNameInput = useCallback((e, id) => {
    setPlayers((currentPlayers) => {
      const player = { ...currentPlayers[id], name: e.target.value };
      return { ...currentPlayers, [id]: player };
    });
  }, []);

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

  const onLockedPositionsShouldSitChange = useCallback(() => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      lockedPositionsDontSit: !currentOptions.lockedPositionsDontSit,
    }));
  }, []);

  const onInningsChange = useCallback((e) => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      innings: e.target.value,
    }));
  }, []);

  const removePlayerById = (id) => {
    setPlayers((currentPlayers) => {
      const newPlayers = { ...currentPlayers };
      delete newPlayers[id];
      return newPlayers;
    });
    if (singleLineup !== undefined) {
      setSingleLineup(undefined);
    }
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
    const newPositions = { ...lockedPositions };
    let shouldUpdate = false;
    if (currentPosition !== "any") {
      newPositions[currentPosition] = undefined;
      shouldUpdate = true;
    }
    if (newPosition !== "any") {
      newPositions[newPosition] = id;
      shouldUpdate = true;
    }
    if (shouldUpdate) {
      setLockedPositions(newPositions);
    }
  };

  const generateLineup = (playerList, opts) => {
    const { lockedPositionsDontSit } = opts;
    let lineup = _.cloneDeep(emptyLineup);

    const lockedPositionIds = [...Object.values(lockedPositions)].filter(
      (pid) => pid !== undefined,
    );
    const playerListCopy = _.cloneDeep(playerList);
    const availablePlayers = _.cloneDeep(playerList);
    if (lockedPositionsDontSit) {
      lineup = { ...lockedPositions };
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

    if (!lockedPositionsDontSit) {
      lockedPositionIds.forEach((pid) => {
        if (availablePlayers[pid] !== undefined) {
          lineup[getLockedPositionById(pid)] = pid;
          delete availablePlayers[pid];
        }
      });
    }

    // Pitcher Logic
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

    Object.keys(lineup)
      .filter((position) => lineup[position] === undefined)
      .forEach((position) => {
        lineup[position] = _.sample([...Object.keys(availablePlayers)]);
        delete availablePlayers[lineup[position]];
      });

    return [lineup, playerListCopy];
  };

  const generateSingleLineup = () => {
    const lineup = generateLineup(players, options);
    setFullGameLineup(undefined);
    setSingleLineup(lineup[0]);
  };

  const generateFullGameLineup = () => {
    const lineups = [];
    let trackedPlayers = _.cloneDeep(players);
    for (let i = 0; i < options.innings; i += 1) {
      const [lineup, updatedPlayers] = generateLineup(trackedPlayers, options);
      trackedPlayers = updatedPlayers;
      lineups.push(lineup);
    }
    setSingleLineup(undefined);
    setFullGameLineup(lineups);
  };

  const contextValue = useMemo(
    () => ({
      players,
      lockedPositions,
      options,
      playerIds: Object.keys(players),
      singleLineup,
      fullGameLineup,
      getPlayerById: (id) => players[id],
      onInningsChange,
      onPlayerNameInput,
      onPlayerHasPitchedChange,
      onPlayerHasSatChange,
      onLockedPositionsShouldSitChange,
      removePlayerById,
      getLockedPositionById,
      setLockedPositionForPlayer,
      generateSingleLineup,
      generateFullGameLineup,
    }),
    [
      players,
      lockedPositions,
      singleLineup,
      fullGameLineup,
      options,
      generateSingleLineup,
      generateFullGameLineup,
    ],
  );
  return (
    <SoftballContext.Provider value={contextValue}>
      {children}
    </SoftballContext.Provider>
  );
}

export { SoftballProvider };
export default SoftballContext;
