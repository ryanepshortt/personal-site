import React, { createContext, useMemo, useState, useCallback } from "react";
import _ from "lodash";
import { Players } from "../constants/softball/Softball";

const initialState = {
  players: Players,
  playerIds: Object.keys(Players),
  lockedPositions: {
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
  },
};

const SoftballContext = createContext(initialState);

function SoftballProvider({ children }) {
  const [players, setPlayers] = useState(Players);
  const [lockedPositions, setLockedPositions] = useState(
    initialState.lockedPositions,
  );
  const [finalLineup, setFinalLineup] = useState();

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
    const lineup = { ...lockedPositions };
    const lockedPositionIds = Object.values(lockedPositions).filter(
      (playerId) => playerId !== undefined,
    );
    const availablePlayers = { ...players };

    lockedPositionIds.forEach((playerId) => delete availablePlayers[playerId]);

    if (lineup.pitcher === undefined) {
      const availablePitchers = Object.keys(availablePlayers).filter(
        (playerId) => !availablePlayers[playerId].hasPitched,
      );
      lineup.pitcher = _.sample(availablePitchers);
      delete availablePlayers[lineup.pitcher];
    }
    Object.keys(lineup)
      .filter((position) => lineup[position] === undefined)
      .forEach((position) => {
        lineup[position] = _.sample(Object.keys(availablePlayers));
        delete availablePlayers[lineup[position]];
      });
    lineup.bench = Object.keys(availablePlayers);
    setFinalLineup(lineup);
  };

  const clearLineup = () => setFinalLineup(undefined);

  const contextValue = useMemo(
    () => ({
      players,
      onPlayerNameInput,
      onPlayerHasPitchedChange,
      removePlayerById,
      getLockedPositionById,
      setLockedPositionForPlayer,
      lockedPositions,
      getPlayerById: (id) => players[id],
      generateLineup,
      playerIds: Object.keys(players),
      finalLineup,
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
