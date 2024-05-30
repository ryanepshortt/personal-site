import React, { createContext, useMemo, useState, useCallback } from "react";
import {
  POSITIONS,
  Players,
  PositionIdToLabelMap,
} from "../constants/softball/Softball";
import { generateLineup } from "./SoftballUtils";

const initialoptions = {
  innings: 7,
  games: 2,
  pitcherInnings: 3,
  shouldReuseCatcher: true,
};

const initialState = {
  players: { ...Players },
  playerIds: Object.keys(Players),
  options: { ...initialoptions },
};

const SoftballContext = createContext(initialState);

function SoftballProvider({ children }) {
  const [players, setPlayers] = useState({ ...Players });
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

  const onPlayerHasCaughtChange = useCallback((id) => {
    setPlayers((currentPlayers) => ({
      ...currentPlayers,
      [id]: {
        ...currentPlayers[id],
        hasCaught: !currentPlayers[id].hasCaught,
      },
    }));
  }, []);

  const onTogglePlayerEligiblePositions = useCallback(
    (playerId, positionId) => {
      setPlayers((currentPlayers) => ({
        ...currentPlayers,
        [playerId]: {
          ...currentPlayers[playerId],
          eligiblePositions: {
            ...currentPlayers[playerId].eligiblePositions,
            [positionId]:
              !currentPlayers[playerId].eligiblePositions[positionId],
          },
        },
      }));
    },
    [],
  );

  const onShouldSwitchPitcherChange = useCallback(() => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      shouldSwitchPitcher: !currentOptions.shouldSwitchPitcher,
    }));
  }, []);

  const onInningsChange = useCallback((e) => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      innings: parseInt(e.target.value, 10) || "",
    }));
  }, []);

  const onGamesChange = useCallback((e) => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      games: parseInt(e.target.value, 10) || "",
    }));
  }, []);

  const onPitcherInningsChange = useCallback((e) => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      pitcherInnings: parseInt(e.target.value, 10) || "",
    }));
  }, []);

  const getPositionFromLineupForPlayer = (lineup, playerId) => {
    return PositionIdToLabelMap[
      Object.keys(lineup).find((positionId) =>
        positionId === POSITIONS.bench
          ? lineup[positionId].includes(playerId)
          : lineup[positionId] === playerId,
      )
    ];
  };

  const flipAllFields = (key, value) => {
    setPlayers((currentPlayers) => {
      const newPlayers = { ...currentPlayers };
      Object.keys(newPlayers).forEach((playerKey) => {
        newPlayers[playerKey] = {
          ...newPlayers[playerKey],
          [key]: value,
        };
      });
      return newPlayers;
    });
  };

  const flipAllEligiblePositions = (positionId, value) => {
    setPlayers((currentPlayers) => {
      const newPlayers = { ...currentPlayers };
      Object.keys(newPlayers).forEach((playerKey) => {
        newPlayers[playerKey] = {
          ...newPlayers[playerKey],
          eligiblePositions: {
            ...newPlayers[playerKey].eligiblePositions,
            [positionId]: value,
          },
        };
      });
      return newPlayers;
    });
  };

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

  const generateFullGameLineup = () => {
    let context = {
      playerList: players,
      games: [],
      options,
    };
    for (let i = 0; i < options.games; i += 1) {
      context.games.push([]);
      for (let j = 0; j < options.innings; j += 1) {
        context = generateLineup(context);
        context.games[i].push(context.lineup);
      }
    }
    setPlayers(context.playerList);
    setFullGameLineup(context.games);
  };

  const contextValue = useMemo(
    () => ({
      players,
      options,
      playerIds: Object.keys(players),
      getPlayerById: (id) => players[id],
      fullGameLineup,
      onInningsChange,
      onPitcherInningsChange,
      onGamesChange,
      onPlayerHasPitchedChange,
      onPlayerHasSatChange,
      onPlayerHasCaughtChange,
      onTogglePlayerEligiblePositions,
      onShouldSwitchPitcherChange,
      removePlayerById,
      generateFullGameLineup,
      getPositionFromLineupForPlayer,
      flipAllFields,
      flipAllEligiblePositions,
    }),
    [players, fullGameLineup, options, generateFullGameLineup],
  );
  return (
    <SoftballContext.Provider value={contextValue}>
      {children}
    </SoftballContext.Provider>
  );
}

export { SoftballProvider };
export default SoftballContext;
