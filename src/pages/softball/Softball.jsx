import React from "react";
import { SoftballProvider } from "../../contexts/Softball";
import PlayerList from "../../components/softball/playerList/PlayerList";
import "./Softball.css";
import SingleLineup from "../../components/softball/singleLineup/SingleLineup";
import Controls from "../../components/softball/controls/Controls";
import FullLineup from "../../components/softball/fullLineup/FullLineup";

function Softball() {
  return (
    <div className="softball-page-wrapper">
      <div className="player-list-wrapper">
        <PlayerList />
      </div>
      <Controls />
      <SingleLineup />
      <FullLineup />
    </div>
  );
}

function SoftballPage() {
  return (
    <SoftballProvider>
      <Softball />
    </SoftballProvider>
  );
}

export default SoftballPage;
