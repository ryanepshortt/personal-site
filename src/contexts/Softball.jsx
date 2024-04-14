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
  lockedPositionsShouldSit: true,
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
  const [finalLineup, setFinalLineup] = useState();
  const [options, setOptions] = useState({ ...initialoptions });

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
      lockedPositionsShouldSit: !currentOptions.lockedPositionsShouldSit,
    }));
  }, []);

  const removePlayerById = (id) => {
    setPlayers((currentPlayers) => {
      const newPlayers = { ...currentPlayers };
      delete newPlayers[id];
      return newPlayers;
    });
    if (finalLineup !== undefined) {
      setFinalLineup(undefined);
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

  const generateLineup = () => {
    const { lockedPositionsShouldSit } = options;
    let lineup = { ...emptyLineup };

    const lockedPositionIds = [...Object.values(lockedPositions)].filter(
      (pid) => pid !== undefined,
    );

    const availablePlayers = { ...players };
    if (!lockedPositionsShouldSit) {
      lineup = { ...lockedPositions };
      lockedPositionIds.forEach((pid) => delete availablePlayers[pid]);
    }

    // Bench logic
    const availablePlayerIds = [...Object.keys(availablePlayers)];
    const benchPlayersRequired = availablePlayerIds.length - 10;
    if (benchPlayersRequired > 0) {
      let availableBenchPlayers = availablePlayerIds.filter(
        (pid) => !availablePlayers[pid].hasSat,
      );
      const bench =
        benchPlayersRequired >= availableBenchPlayers.length
          ? [...availableBenchPlayers]
          : [];
      if (benchPlayersRequired >= availableBenchPlayers.length) {
        // remove the bench players from available players
        bench.forEach((pid) => {
          delete availablePlayers[pid];
        });
        // rebuild availableBenchPlayers if more are required
        if (benchPlayersRequired > availableBenchPlayers.length) {
          availableBenchPlayers = [...Object.keys(availablePlayers)];
        }
      }
      for (let i = 0; i < benchPlayersRequired - bench.length; i += 1) {
        const benchPid = _.sample(availableBenchPlayers);
        bench.push(benchPid);
        availableBenchPlayers.splice(
          availableBenchPlayers.indexOf(benchPid),
          1,
        );
        delete availablePlayers[benchPid];
      }
      lineup.bench = bench;
    }

    if (lockedPositionsShouldSit) {
      lockedPositionIds.forEach((pid) => {
        if (availablePlayers[pid] !== undefined) {
          lineup[getLockedPositionById(pid)] = pid;
          delete availablePlayers[pid];
        }
      });
    }

    if (lineup.pitcher === undefined) {
      const availablePitchers = [...Object.keys(availablePlayers)].filter(
        (playerId) => !availablePlayers[playerId].hasPitched,
      );
      lineup.pitcher = _.sample(availablePitchers);
      delete availablePlayers[lineup.pitcher];
    }

    Object.keys(lineup)
      .filter((position) => lineup[position] === undefined)
      .forEach((position) => {
        lineup[position] = _.sample([...Object.keys(availablePlayers)]);
        delete availablePlayers[lineup[position]];
      });

    setFinalLineup(lineup);
  };

  const clearLineup = () => setFinalLineup(undefined);

  const contextValue = useMemo(
    () => ({
      players,
      lockedPositions,
      playerIds: Object.keys(players),
      finalLineup,
      onPlayerNameInput,
      onPlayerHasPitchedChange,
      onPlayerHasSatChange,
      onLockedPositionsShouldSitChange,
      removePlayerById,
      getLockedPositionById,
      setLockedPositionForPlayer,
      getPlayerById: (id) => players[id],
      generateLineup,
      clearLineup,
    }),
    [players, lockedPositions, finalLineup],
  );
  return (
    <SoftballContext.Provider value={contextValue}>
      {children}
    </SoftballContext.Provider>
  );
}

export { SoftballProvider };
export default SoftballContext;
