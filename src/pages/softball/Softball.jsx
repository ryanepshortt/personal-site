import React from "react";
import { SoftballProvider } from "../../contexts/Softball";
import PlayerList from "../../components/softball/playerList/PlayerList";
import "./Softball.css";
import FinalLineup from "../../components/softball/singleLineup/SingleLineup";
import Controls from "../../components/softball/controls/Controls";

function Softball() {
  return (
    <div className="softball-page-wrapper">
      <div className="player-list-wrapper">
        <PlayerList />
      </div>
      <Controls />
      <FinalLineup />
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
