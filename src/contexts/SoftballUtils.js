import _ from "lodash";
import { POSITIONS, emptyLineup } from "../constants/softball/Softball";

const getEligiblePositionKey = (positionId) =>
  positionId.includes(POSITIONS.outfield) ? POSITIONS.outfield : positionId;

const getEligiblePlayerIdsForPosition = (availablePlayers, position) =>
  [...Object.keys(availablePlayers)].filter(
    (playerId) =>
      availablePlayers[playerId].eligiblePositions[
        getEligiblePositionKey(position)
      ],
  );

const generateBench = (lineupContext) => {
  /*
    BENCH LOGIC
  */
  const newContext = _.cloneDeep(lineupContext);
  // Bench logic - find players who have not sat and put them randomly on the bench
  let bench = [];
  let playersThatHaveNotSat = [];
  const availablePlayerIds = [...Object.keys(newContext.availablePlayers)];
  const benchPlayersRequired = Object.keys(newContext.playerList).length - 10;
  const replaceablePlayersFromBench = [];
  if (benchPlayersRequired > 0) {
    playersThatHaveNotSat = availablePlayerIds.filter(
      (pid) => !newContext.availablePlayers[pid].hasSat,
    );
    if (benchPlayersRequired >= playersThatHaveNotSat.length) {
      // remove the bench players from available players
      bench = [...playersThatHaveNotSat];
      bench.forEach((pid) => {
        delete newContext.availablePlayers[pid];
      });
      // rebuild availableBenchPlayers if more are required
      if (benchPlayersRequired > playersThatHaveNotSat.length) {
        playersThatHaveNotSat = [...Object.keys(newContext.availablePlayers)];
      }
      Object.keys(newContext.playerList).forEach((pid) => {
        newContext.playerList[pid].hasSat = false;
      });
    }
    const remainingBenchPlayerNum = benchPlayersRequired - bench.length;
    for (let i = 0; i < remainingBenchPlayerNum; i += 1) {
      const benchPid = _.sample(playersThatHaveNotSat);
      bench.push(benchPid);
      replaceablePlayersFromBench.push(benchPid);
      playersThatHaveNotSat.splice(playersThatHaveNotSat.indexOf(benchPid), 1);
      delete newContext.availablePlayers[benchPid];
      newContext.playerList[benchPid].hasSat = true;
    }
  }
  newContext.lineup.bench = bench;
  newContext.replaceablePlayersFromBench = replaceablePlayersFromBench;
  return newContext;
};

const setDistributedPositionWithBenchReplacement = (
  positionId,
  key,
  lineupContext,
) => {
  /*
   Reusable function for positions that should be distributed evenly.
  */
  const newContext = _.cloneDeep(lineupContext);
  const allEligiblePlayers = getEligiblePlayerIdsForPosition(
    newContext.availablePlayers,
    positionId,
  );
  let allEligibleAndPlayersThatHaveNotPlayed = allEligiblePlayers.filter(
    (pid) => !newContext.availablePlayers[pid][key],
  );
  if (allEligibleAndPlayersThatHaveNotPlayed.length === 0) {
    const eligibleReplacementFromBench =
      newContext.replaceablePlayersFromBench.find(
        (pid) =>
          !newContext.playerList[pid][key] &&
          newContext.playerList[pid].eligiblePositions[positionId],
      );
    const eligibleReplacementToBench = [
      ...Object.keys(newContext.availablePlayers),
    ]?.find((pid) => !newContext.availablePlayers[pid].hasSat);
    if (eligibleReplacementFromBench && eligibleReplacementToBench) {
      newContext.lineup[positionId] = eligibleReplacementFromBench;
      newContext.lineup.bench[
        newContext.lineup.bench.indexOf(eligibleReplacementFromBench)
      ] = eligibleReplacementToBench;
      newContext.replaceablePlayersFromBench[
        newContext.replaceablePlayersFromBench.indexOf(
          eligibleReplacementFromBench,
        )
      ] = eligibleReplacementToBench;
      delete newContext.availablePlayers[eligibleReplacementToBench];
      newContext.playerList[eligibleReplacementToBench].hasSat = true;
      newContext.playerList[eligibleReplacementFromBench].hasSat = false;
      newContext.playerList[eligibleReplacementFromBench][key] = true;
    } else {
      Object.keys(newContext.playerList).forEach((pid) => {
        newContext.playerList[pid][key] = false;
      });
      allEligibleAndPlayersThatHaveNotPlayed = getEligiblePlayerIdsForPosition(
        newContext.availablePlayers,
        positionId,
      );
    }
  }
  if (!newContext.lineup[positionId]) {
    const playerId = _.sample(allEligibleAndPlayersThatHaveNotPlayed);
    delete newContext.availablePlayers[playerId];
    newContext.playerList[playerId][key] = true;
    newContext.lineup[positionId] = playerId;
  }

  return newContext;
};

const setPositionWithReplacement = (lineupContext, positionId) => {
  if (lineupContext.lineup[positionId]) {
    return lineupContext;
  }
  const newContext = _.cloneDeep(lineupContext);
  const eligiblePositionId = getEligiblePositionKey(positionId);
  const eligiblePlayersForPosition = getEligiblePlayerIdsForPosition(
    newContext.availablePlayers,
    eligiblePositionId,
  );
  if (eligiblePlayersForPosition.length > 0) {
    // ELIGIBLE PLAYER WITHOUT REPLACEMENT
    const playerId = _.sample(eligiblePlayersForPosition);
    newContext.lineup[positionId] = playerId;
    delete newContext.availablePlayers[playerId];
    return newContext;
  }
  const eligiblePlayers = getEligiblePlayerIdsForPosition(
    newContext.playerList,
    positionId,
  );
  if (eligiblePlayers.length === 0) {
    // NO ELIGIBLE PLAYERS ANYWHERE; just do random with available players
    const playerId = _.sample(Object.keys(newContext.availablePlayers));
    newContext.lineup[positionId] = playerId;
    delete newContext.availablePlayers[playerId];
    return newContext;
  }
  // ELIGIBLE PLAYERS, execute swap
  const playerToPositionMap = {};
  const positionEligibilityMap = {};
  Object.keys(newContext.lineup).forEach((pos) => {
    if (pos === POSITIONS.bench) {
      newContext.lineup[pos].forEach((playerId) => {
        playerToPositionMap[playerId] = POSITIONS.bench;
      });
    } else {
      playerToPositionMap[newContext.lineup[pos]] = pos;
      positionEligibilityMap[pos] = getEligiblePlayerIdsForPosition(
        newContext.availablePlayers,
        pos,
      );
    }
  });
  eligiblePlayers.some((potentialReplacement) => {
    const playersPosition = playerToPositionMap[potentialReplacement];
    if (
      playersPosition === POSITIONS.pitcher ||
      playersPosition === POSITIONS.catcher ||
      playersPosition === POSITIONS.bench
    ) {
      // TODO BUILD OUT SWAPPING FOR CATCHER AND BENCH
      return false;
    }
    const availableSubstitutes = positionEligibilityMap[playersPosition];
    if (availableSubstitutes?.length > 0) {
      // eslint-disable-next-line
      newContext.lineup[playersPosition] = availableSubstitutes[0];
      newContext.lineup[positionId] = potentialReplacement;
      return true;
    }
    return false;
  });
  return newContext;
};

export const generateLineup = (playerList, opts, previousLineup) => {
  /*
    ACTUAL FUNCTION HERE
  */
  let lineupContext = {
    options: opts,
    lineup: _.cloneDeep(emptyLineup),
    playerList: _.cloneDeep(playerList),
    availablePlayers: _.cloneDeep(playerList),
    replaceablePlayersFromBench: [],
  };

  // PITCHER Logic - set pitcher from previous inning
  if (
    !lineupContext.options.shouldSwitchPitcher &&
    previousLineup?.pitcher !== undefined
  ) {
    lineupContext.lineup.pitcher = previousLineup.pitcher;
    delete lineupContext.availablePlayers[lineupContext.lineup.pitcher];
  }

  // BENCH
  lineupContext = generateBench(lineupContext);

  // PITCHER Logic For Randomizing Each Inning
  if (!lineupContext.lineup.pitcher) {
    lineupContext = setDistributedPositionWithBenchReplacement(
      POSITIONS.pitcher,
      "hasPitched",
      lineupContext,
    );
  }

  // CATCHER Logic
  lineupContext = setDistributedPositionWithBenchReplacement(
    POSITIONS.catcher,
    "hasCaught",
    lineupContext,
  );

  // Remaining Randomized Position Logic
  Object.keys(lineupContext.lineup).forEach((position) => {
    lineupContext = setPositionWithReplacement(lineupContext, position);
  });

  return [lineupContext.lineup, lineupContext.playerList];
};

export default generateLineup;
