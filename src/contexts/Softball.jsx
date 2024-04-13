import React, { createContext, useMemo, useState, useCallback } from "react";
import Players from "../constants/softball/Players";

const initialState = {
  players: Players,
  playerIds: Object.keys(Players),
};

const SoftballContext = createContext(initialState);

function SoftballProvider({ children }) {
  const [players, setPlayers] = useState(Players);

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

  const contextValue = useMemo(
    () => ({
      players,
      onPlayerNameInput,
      onPlayerHasPitchedChange,
      removePlayerById,
      getPlayerById: (id) => players[id],
      playerIds: Object.keys(players),
    }),
    [players],
  );
  return (
    <SoftballContext.Provider value={contextValue}>
      {children}
    </SoftballContext.Provider>
  );
}

export { SoftballProvider };
export default SoftballContext;
