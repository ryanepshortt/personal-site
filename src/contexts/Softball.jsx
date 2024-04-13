import React, { createContext, useMemo, useState, useCallback } from "react";
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

  const removePlayerById = useCallback((id) => {
    setPlayers((currentPlayers) => {
      const newPlayers = { ...currentPlayers };
      delete newPlayers[id];
      return newPlayers;
    });
  }, []);

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
      playerIds: Object.keys(players),
    }),
    [players, lockedPositions],
  );
  return (
    <SoftballContext.Provider value={contextValue}>
      {children}
    </SoftballContext.Provider>
  );
}

export { SoftballProvider };
export default SoftballContext;
