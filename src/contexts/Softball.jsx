import React, { createContext, useMemo, useState, useCallback } from "react";
import _ from "lodash";
import {
  POSITIONS,
  Players,
  PositionIdToLabelMap,
} from "../constants/softball/Softball";
import { generateLineup } from "./SoftballUtils";

const initialoptions = {
  sitLockedPositions: true,
  shouldSwitchPitcher: false,
  innings: 7,
  games: 2,
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

  const generateFullGameLineup = () => {
    const games = [];
    let trackedPlayers = _.cloneDeep(players);
    for (let i = 0; i < options.games; i += 1) {
      const lineups = [];
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
      if (!options.shouldSwitchPitcher) {
        trackedPlayers[lineups[0].pitcher].hasSat = true;
      }
    }
    setFullGameLineup(games);
  };

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

  const contextValue = useMemo(
    () => ({
      players,
      options,
      playerIds: Object.keys(players),
      fullGameLineup,
      getPlayerById: (id) => players[id],
      onInningsChange,
      onGamesChange,
      onPlayerHasPitchedChange,
      onPlayerHasSatChange,
      onPlayerHasCaughtChange,
      onTogglePlayerEligiblePositions,
      onSitLockedPositionsChange,
      onShouldSwitchPitcherChange,
      removePlayerById,
      generateFullGameLineup,
      getPositionFromLineupForPlayer,
      flipAllFields,
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
